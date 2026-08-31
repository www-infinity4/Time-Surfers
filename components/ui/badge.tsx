import type { ComponentProps } from "react";
export function Badge({variant,...props}:ComponentProps<"span"> & {variant?:string}){return <span data-slot="badge" {...props}/>;}
