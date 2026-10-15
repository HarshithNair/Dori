'use client';
import {useEffect,useRef,useState} from 'react';
import {animate,useReducedMotion} from 'motion/react';
export const EASE:[number,number,number,number]=[.22,1,.36,1];
export const SPRING={type:'spring',stiffness:420,damping:34,mass:.9} as const;
export const page={initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-6},transition:{duration:.3,ease:EASE}};
export const rise=(delay=0,y=14)=>({initial:{opacity:0,y},animate:{opacity:1,y:0},transition:{duration:.5,ease:EASE,delay}});
export const fade=(delay=0)=>({initial:{opacity:0},animate:{opacity:1},transition:{duration:.4,ease:EASE,delay}});
export function CountUp({value,format=(v:number)=>String(Math.round(v)),duration=.9}:{value:number;format?:(v:number)=>string;duration?:number}){
  const reduce=useReducedMotion();const prev=useRef(0);const[shown,show]=useState(()=>reduce?value:0);
  useEffect(()=>{const from=prev.current;prev.current=value;if(reduce||from===value){show(value);return}
    const run=animate(from,value,{duration,ease:EASE,onUpdate:n=>show(n)});return()=>run.stop()},[value,reduce,duration]);
  return <>{format(shown)}</>}
