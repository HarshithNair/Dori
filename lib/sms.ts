/** Outbound text messaging for a static export.
 *
 *  There is no server here (`output: 'export'`), so a provider API key cannot be
 *  held safely: anything the browser can read, every visitor can read. Two paths:
 *
 *  1. NEXT_PUBLIC_SMS_WEBHOOK set -> POST the message to that URL, which sends it.
 *     A write-only hook (Zapier Catch Hook, or your own function) is not a
 *     credential: it cannot be read from, only posted to.
 *  2. Nothing configured -> open the visitor's own SMS app with the text
 *     prefilled, which sends nothing until they tap send.
 */
export const SMS_TO='+919820210165';
export const WEBHOOK=process.env.NEXT_PUBLIC_SMS_WEBHOOK||'';

/** `₹` and typographic quotes are absent from the GSM-7 alphabet, so a single one
 *  forces the whole message into UCS-2 and caps each segment at 70 characters.
 *  Indian carriers drop those multi-part Unicode messages often enough to avoid. */
export function smsSafe(text:string):string{
  return text.replace(/₹/g,'Rs.').replace(/[’‘]/g,"'").replace(/[“”]/g,'"').replace(/[–—]/g,'-').replace(/…/g,'...');
}

function openSms(body:string,to:string){
  // iOS expects `&body=`; Android and desktop handlers expect `?body=`.
  const sep=/iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent)?'&':'?';
  const a=document.createElement('a');
  a.href='sms:'+to+sep+'body='+encodeURIComponent(body);
  a.style.display='none';
  document.body.appendChild(a);a.click();a.remove();
}

export type SmsResult='sent'|'composer'|'failed';

/** Sends via the webhook when one is configured, otherwise opens the composer.
 *  A webhook that errors falls back to the composer rather than losing the message. */
export async function sendSms(body:string,to:string=SMS_TO):Promise<SmsResult>{
  if(typeof window==='undefined')return 'failed';
  const text=smsSafe(body);
  if(WEBHOOK){
    try{
      const stop=new AbortController();
      const timer=setTimeout(()=>stop.abort(),8000);
      const r=await fetch(WEBHOOK,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({to,text}),signal:stop.signal});
      clearTimeout(timer);
      if(r.ok)return 'sent';
    }catch{}
  }
  try{openSms(text,to);return 'composer'}catch{return 'failed'}
}
