export const agregar=(items,id)=>{const existe=items.find(x=>x.id===id);return existe?items.map(x=>x.id===id?{...x,cantidad:x.cantidad+1}:x):[...items,{id,cantidad:1}];};
export const cambiarCantidad=(items,id,delta)=>items.map(x=>x.id===id?{...x,cantidad:Math.max(1,x.cantidad+delta)}:x);
export const quitar=(items,id)=>items.filter(x=>x.id!==id);
export const total=(items,productos)=>items.reduce((s,item)=>s+(productos.find(x=>x.id===item.id)?.precio||0)*item.cantidad,0);
