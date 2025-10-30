// This function use to detect whether user active or not
// NOTE: Be careful this function use in ForceDirectedGraph.jsx
import { useState, useEffect, useRef, useCallback } from "react";

export default function UserActivityDetector(inactivityTimeout = 5000) {
    const [isActive, setIsActive] = useState(true);
    const lastActivityTimeRef = useRef(Date.now());
    const throttleRef = useRef(false);
  
    const updateActivity = useCallback(() => {
        lastActivityTimeRef.current = Date.now();
    
        if (!throttleRef.current) {
            throttleRef.current = true;
            requestAnimationFrame(() => {
                if (!isActive) setIsActive(true); // only update state if changed
                throttleRef.current = false;
            });
        }
    }, [isActive]);
  
    const registerZoom = useCallback(
        (zoomBehavior) => {
            if (!zoomBehavior || !zoomBehavior.on) return;
            zoomBehavior
                .on("start.activity", updateActivity)
                .on("zoom.activity", updateActivity)
                .on("end.activity", updateActivity);
        },[updateActivity]
    );
  
    useEffect(() => {
        let isPointerDown = false;
    
        const handleActivity = (e) => {
            updateActivity();
            if (e.buttons === 1) isPointerDown = true;
        };
    
        const handlePointerMove = () => {
            updateActivity()
            if (isPointerDown) updateActivity();
        };
    
        const handlePointerDown = () => {
            isPointerDown = true;
            updateActivity();
        };
    
        const handlePointerUp = () => {
            isPointerDown = false;
            updateActivity();
        };
    
        const events = [
            ["mousemove", handleActivity],
            ["mousedown", handleActivity],
            ["mouseup", handleActivity],
            ["pointermove", handlePointerMove],
            ["pointerdown", handlePointerDown],
            ["pointerup", handlePointerUp],
            ["click", updateActivity],
            ["keydown", updateActivity],
            ["wheel", updateActivity]
        ];
    
        events.forEach(([event, handler]) =>
            window.addEventListener(event, handler, { capture: true, passive: true })
        );
    
        const interval = setInterval(() => {
            if (Date.now() - lastActivityTimeRef.current > inactivityTimeout) {
                setIsActive(false);
            }
        }, 1000);
    
        return () => {
            events.forEach(([event, handler]) =>
                window.removeEventListener(event, handler, true)
            );
            clearInterval(interval);
        };
    }, [inactivityTimeout, updateActivity]);
 
    return isActive;
}