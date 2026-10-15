/** Opening the visitor's own SMS app is the only way a static export can start a
 *  text message: there is no server here, so there is nowhere to keep a provider
 *  credential. Nothing leaves the device until the visitor taps send. */
export const SMS_TO='+919820210165';
export function openSms(body:string,to:string=SMS_TO){
  if(typeof window==='undefined')return;
  // iOS expects `&body=`; Android and desktop handlers expect `?body=`.
  const sep=/iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent)?'&':'?';
  const a=document.createElement('a');
  a.href='sms:'+to+sep+'body='+encodeURIComponent(body);
  a.style.display='none';
  document.body.appendChild(a);
  a.click();
  a.remove();
}
