import * as React from "react";
import { cn } from "../../lib/utils";

const DialogContext = React.createContext(null);

export function Dialog({ open, onOpenChange, children }) {
  return (
    <DialogContext.Provider value={{ open, onOpenChange }}>
      {children}
    </DialogContext.Provider>
  );
}

export function DialogTrigger({ asChild, children }) {
  const { onOpenChange } = React.useContext(DialogContext);

  if (asChild) {
    return React.cloneElement(children, {
      onClick: () => onOpenChange(true),
    });
  }

  return (
    <button onClick={() => onOpenChange(true)}>
      {children}
    </button>
  );
}

export function DialogContent({ className, children }) {
  const { open, onOpenChange } = React.useContext(DialogContext);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50"
        onClick={() => onOpenChange(false)}
      />

      {/* Content */}
      <div
        className={cn(
          "relative z-50 w-full max-w-lg rounded-xl border border-border bg-background p-6 shadow-lg",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function DialogHeader({ className, ...props }) {
  return (
    <div
      className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}

export function DialogTitle({ className, ...props }) {
  return (
    <h2
      className={cn("text-lg font-semibold text-foreground", className)}
      {...props}
    />
  );
}

export function DialogDescription({ className, ...props }) {
  return (
    <p
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

export function DialogFooter({ className, ...props }) {
  return (
    <div
      className={cn("flex flex-col-reverse sm:flex-row sm:justify-end gap-2", className)}
      {...props}
    />
  );
}
