"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className={cn(
          "relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden",
          "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isOpen ? "opacity-100 scale-100 rotate-[-1deg]" : "opacity-0 scale-95 rotate-0"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-zinc-800">
          {title && (
            <h2 className="text-xl font-bold text-white">{title}</h2>
          )}
          <button
            onClick={onClose}
            className="ml-auto p-2 rounded-lg hover:bg-zinc-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-zinc-400" />
          </button>
        </div>

        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
