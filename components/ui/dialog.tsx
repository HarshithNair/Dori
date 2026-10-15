'use client';
import * as Dialog from '@radix-ui/react-dialog';
import {X} from 'lucide-react';
export function Modal({title,open,onClose,children}:{title:string;open:boolean;onClose:()=>void;children:React.ReactNode}){return <Dialog.Root open={open} onOpenChange={v=>!v&&onClose()}><Dialog.Portal><Dialog.Overlay className="modal-overlay"/><Dialog.Content className="modal"><div className="section-title"><Dialog.Title>{title}</Dialog.Title><Dialog.Close className="icon-button" aria-label="Close dialog"><X size={20}/></Dialog.Close></div><Dialog.Description className="sr-only">{title} for the dori frontend demo.</Dialog.Description>{children}</Dialog.Content></Dialog.Portal></Dialog.Root>}
