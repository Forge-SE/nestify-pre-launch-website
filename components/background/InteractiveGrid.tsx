"use client";

import { useEffect, useRef } from "react";

export function InteractiveGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const cellSize = 50;
    let cols = 0;
    let rows = 0;
    let cells: { x: number; y: number; opacity: number }[][] = [];

    let mouseX = -1000;
    let mouseY = -1000;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      cols = Math.ceil(width / cellSize);
      rows = Math.ceil(height / cellSize);

      cells = Array.from({ length: cols }, (_, i) =>
        Array.from({ length: rows }, (_, j) => ({
          x: i,
          y: j,
          opacity: 0,
        }))
      );
    };

    window.addEventListener("resize", resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint background grid lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
      ctx.lineWidth = 1;

      ctx.beginPath();
      for (let i = 0; i <= cols; i++) {
        ctx.moveTo(i * cellSize, 0);
        ctx.lineTo(i * cellSize, height);
      }
      for (let j = 0; j <= rows; j++) {
        ctx.moveTo(0, j * cellSize);
        ctx.lineTo(width, j * cellSize);
      }
      ctx.stroke();

    
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const cell = cells[i][j];

          const cellX = i * cellSize;
          const cellY = j * cellSize;

          
          const isHovered =
            mouseX >= cellX &&
            mouseX < cellX + cellSize &&
            mouseY >= cellY &&
            mouseY < cellY + cellSize;

          if (isHovered) {
         
            cell.opacity = 1;
          } else {
            
            // Fades out slower so the opacity stays higher for longer
            cell.opacity = Math.max(0, cell.opacity - 0.015);
          }

          
          if (cell.opacity > 0.01) {
            
            
            // Much darker burnt orange
            ctx.fillStyle = `rgba(154, 52, 18, ${cell.opacity})`; 
            ctx.fillRect(cellX, cellY, cellSize, cellSize);
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10"
      style={{ background: "#0a0a0a" }} 
    />
  );
}
