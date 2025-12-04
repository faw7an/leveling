"use client"
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom';

function Portal({children}) {
    const [mounted, setMounted] = useState(false);

    useEffect(()=>{
        setMounted(true);
    },[])

    if(!mounted) return null;

    const portalRoot = document.getElementById("portal-root");
    
    if(!portalRoot) return null;

  return createPortal(children, portalRoot);
}

export default Portal