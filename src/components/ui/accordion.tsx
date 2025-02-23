"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "flex flex-col gap-5 rounded-[10px] border-2 px-6 py-5 [&[data-state=open]]:py-6",
      className,
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex w-full flex-grow items-center justify-between gap-5 pb-5 text-left text-lg font-medium transition-all lg:text-xl [&[data-state=open]>div>svg]:rotate-45",
        className,
      )}
      {...props}
    >
      {children}

      <div className="lg:h-[52px] lg:w-[52px] flex h-10 w-10 items-center justify-center rounded-md bg-red-200 p-[10px]">
        <Plus className="h-5 w-5 lg:h-7 lg:w-7 shrink-0 text-black text-muted-foreground transition-transform duration-200" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden rounded-md text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down data-[state=open]:border-t-2 md:text-base lg:text-lg"
    {...props}
  >
    <div className={cn("flex flex-col gap-5 pt-5", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
