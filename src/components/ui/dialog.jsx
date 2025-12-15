// // import * as React from "react";
// // import { cn } from "../../lib/utils";

// // const DialogContext = React.createContext(null);

// // export function Dialog({ open, onOpenChange, children }) {
// //   return (
// //     <DialogContext.Provider value={{ open, onOpenChange }}>
// //       {children}
// //     </DialogContext.Provider>
// //   );
// // }

// // export function DialogTrigger({ asChild, children }) {
// //   const { onOpenChange } = React.useContext(DialogContext);

// //   if (asChild) {
// //     return React.cloneElement(children, {
// //       onClick: () => onOpenChange(true),
// //     });
// //   }

// //   return (
// //     <button onClick={() => onOpenChange(true)}>
// //       {children}
// //     </button>
// //   );
// // }

// // export function DialogContent({ className, children }) {
// //   const { open, onOpenChange } = React.useContext(DialogContext);

// //   if (!open) return null;

// //   return (
// //     <div className="fixed inset-0 z-50 flex items-center justify-center">
// //       {/* Overlay */}
// //       <div
// //         className="fixed inset-0 bg-black/50"
// //         onClick={() => onOpenChange(false)}
// //       />

// //       {/* Content */}
// //       <div
// //         className={cn(
// //           "relative z-50 w-full max-w-lg rounded-xl border border-border bg-background p-6 shadow-lg",
// //           className
// //         )}
// //       >
// //         {children}
// //       </div>
// //     </div>
// //   );
// // }

// // export function DialogHeader({ className, ...props }) {
// //   return (
// //     <div
// //       className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}
// //       {...props}
// //     />
// //   );
// // }

// // export function DialogTitle({ className, ...props }) {
// //   return (
// //     <h2
// //       className={cn("text-lg font-semibold text-foreground", className)}
// //       {...props}
// //     />
// //   );
// // }

// // export function DialogDescription({ className, ...props }) {
// //   return (
// //     <p
// //       className={cn("text-sm text-muted-foreground", className)}
// //       {...props}
// //     />
// //   );
// // }

// // export function DialogFooter({ className, ...props }) {
// //   return (
// //     <div
// //       className={cn("flex flex-col-reverse sm:flex-row sm:justify-end gap-2", className)}
// //       {...props}
// //     />
// //   );
// // }

// import * as React from "react";
// import { cn } from "../../lib/utils";

// /* -------------------- CONTEXT -------------------- */
// const DialogContext = React.createContext(null);

// /* -------------------- ROOT -------------------- */
// export function Dialog({ open, onOpenChange, children }) {
//   return (
//     <DialogContext.Provider value={{ open, onOpenChange }}>
//       {children}
//     </DialogContext.Provider>
//   );
// }

// /* -------------------- TRIGGER -------------------- */
// export function DialogTrigger({ asChild, children }) {
//   const { onOpenChange } = React.useContext(DialogContext);

//   if (asChild) {
//     return React.cloneElement(children, {
//       onClick: () => onOpenChange(true),
//     });
//   }

//   return (
//     <button onClick={() => onOpenChange(true)}>
//       {children}
//     </button>
//   );
// }

// /* -------------------- CONTENT -------------------- */
// export function DialogContent({ className, children }) {
//   const { open, onOpenChange } = React.useContext(DialogContext);

//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center">
//       {/* Overlay */}
//       <div
//         className="
//           fixed inset-0 
//           bg-black/40 
//           backdrop-blur-sm
//           animate-in fade-in-0
//         "
//         onClick={() => onOpenChange(false)}
//       />

//       {/* Dialog Box */}
//       <div
//         className={cn(
//           `
//           relative z-50
//           w-full max-w-lg
//           rounded-2xl
//           border border-border
//           bg-background
//           p-6
//           shadow-2xl
//           animate-in zoom-in-95 fade-in-0
//           `,
//           className
//         )}
//       >
//         {/* Close Button */}
//         <button
//           onClick={() => onOpenChange(false)}
//           className="
//             absolute right-4 top-4 
//             rounded-md 
//             text-muted-foreground 
//             hover:text-foreground
//             focus:outline-none
//           "
//         >
//           ✕
//         </button>

//         {children}
//       </div>
//     </div>
//   );
// }

// /* -------------------- HEADER -------------------- */
// export function DialogHeader({ className, ...props }) {
//   return (
//     <div
//       className={cn(
//         "flex flex-col space-y-2 text-center sm:text-left",
//         className
//       )}
//       {...props}
//     />
//   );
// }

// /* -------------------- TITLE -------------------- */
// export function DialogTitle({ className, ...props }) {
//   return (
//     <h2
//       className={cn("text-lg font-semibold text-foreground", className)}
//       {...props}
//     />
//   );
// }

// /* -------------------- DESCRIPTION -------------------- */
// export function DialogDescription({ className, ...props }) {
//   return (
//     <p
//       className={cn("text-sm text-muted-foreground", className)}
//       {...props}
//     />
//   );
// }

// /* -------------------- FOOTER -------------------- */
// export function DialogFooter({ className, ...props }) {
//   return (
//     <div
//       className={cn(
//         "flex flex-col-reverse sm:flex-row sm:justify-end gap-2",
//         className
//       )}
//       {...props}
//     />
//   );
// }

import * as React from "react";
import { cn } from "../../lib/utils";

const DialogContext = React.createContext(null);

/* ---------------- ROOT ---------------- */
export function Dialog({ open, onOpenChange, children }) {
  return (
    <DialogContext.Provider value={{ open, onOpenChange }}>
      {children}
    </DialogContext.Provider>
  );
}

/* ---------------- TRIGGER ---------------- */
export function DialogTrigger({ asChild, children }) {
  const { onOpenChange } = React.useContext(DialogContext);

  if (asChild) {
    return React.cloneElement(children, {
      onClick: () => onOpenChange(true),
    });
  }

  return <button onClick={() => onOpenChange(true)}>{children}</button>;
}

/* ---------------- CONTENT ---------------- */
export function DialogContent({ className, children }) {
  const { open, onOpenChange } = React.useContext(DialogContext);
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* DARK OVERLAY */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />

      {/* MODAL */}
      <div
        className={cn(
          `
          relative z-50
          w-full max-w-lg
          rounded-2xl
          bg-white        /* ✅ IMPORTANT FIX */
          text-black
          p-6
          shadow-2xl
          border border-gray-200
          animate-in fade-in zoom-in-95
          `,
          className
        )}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}

/* ---------------- HEADER ---------------- */
export function DialogHeader({ className, ...props }) {
  return (
    <div
      className={cn("mb-4 space-y-1 text-left", className)}
      {...props}
    />
  );
}

/* ---------------- TITLE ---------------- */
export function DialogTitle({ className, ...props }) {
  return (
    <h2
      className={cn("text-xl font-semibold text-gray-900", className)}
      {...props}
    />
  );
}

/* ---------------- DESCRIPTION ---------------- */
export function DialogDescription({ className, ...props }) {
  return (
    <p
      className={cn("text-sm text-gray-500", className)}
      {...props}
    />
  );
}

/* ---------------- FOOTER ---------------- */
export function DialogFooter({ className, ...props }) {
  return (
    <div
      className={cn(
        "mt-6 flex justify-end gap-3",
        className
      )}
      {...props}
    />
  );
}
