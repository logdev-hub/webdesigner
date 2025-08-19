function showToast(msg){
  const el=document.getElementById('liveToast');
  if(!el) return;
  document.getElementById('toastMsg').textContent=msg||'Pronto!';
  bootstrap.Toast.getOrCreateInstance(el,{delay:1800}).show();
}
function copyToClipboard(text){
  navigator.clipboard?.writeText(text).then(()=>showToast('Copiado 📋')).catch(()=>alert(text));
}
