import * as React from 'react';
import {cva,type VariantProps} from 'class-variance-authority';
import {clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';
const variants=cva('btn',{variants:{variant:{default:'primary',secondary:'secondary',ghost:'ghost',yellow:'yellow',danger:'danger'}},defaultVariants:{variant:'default'}});
export function Button({className,variant,...props}:React.ButtonHTMLAttributes<HTMLButtonElement>&VariantProps<typeof variants>){return <button className={twMerge(clsx(variants({variant}),className))} {...props}/>}
