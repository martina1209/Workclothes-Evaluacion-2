// Datos simulados de la tienda: almacenados en localStorage para conservar cambios.
const iniciales = [
{id:1,nombre:'Chaqueta Canvas Heavy-Duty',categoria:'Chaquetas',descripcion:'Lona de algodón 12oz forrada, resistente al viento y la fricción.',precio:49990,stock:12,imagen:'/img/chaqueta.jpg',oferta:false},
{id:2,nombre:'Pantalón Cargo Doble Rodilla',categoria:'Pantalones',descripcion:'Costuras triples y bolsillos utilitarios reforzados.',precio:34990,stock:8,imagen:'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80',oferta:false},
{id:3,nombre:'Overshirt de Franela Gruesa',categoria:'Camisas',descripcion:'Tejido térmico resistente al desgaste diario y bajas temperaturas.',precio:29990,stock:10,imagen:'/img/camisa.jpg',oferta:false},
{id:4,nombre:'Polera Heavyweight 240g',categoria:'Poleras',descripcion:'Algodón peinado denso con cuello reforzado anti-deformación.',precio:16990,stock:5,imagen:'/img/polera1.webp',oferta:true},
{id:5,nombre:'Polerón Workclothes',categoria:'Polerones',descripcion:'Polerón resistente para uso diario.',precio:27990,stock:6,imagen:'/img/poleron.jpg',oferta:false}
];
export const dinero = n => '$'+Number(n).toLocaleString('es-CL');
export const leer = (clave, defecto) => {try { const valor=localStorage.getItem('wc_'+clave); return valor===null?defecto:JSON.parse(valor); } catch {return defecto;} };
export const guardar=(clave,datos)=>localStorage.setItem('wc_'+clave,JSON.stringify(datos));
export const listarProductos=()=>leer('productos',iniciales);
export const crearProducto=(datos)=>{const lista=listarProductos();const nuevo={...datos,id:Date.now()};guardar('productos',[...lista,nuevo]);return nuevo;};
export const actualizarProducto=(id,cambios)=>{const lista=listarProductos().map(p=>p.id===Number(id)?{...p,...cambios}:p);guardar('productos',lista);return lista;};
export const eliminarProducto=id=>{const lista=listarProductos().filter(p=>p.id!==Number(id));guardar('productos',lista);return lista;};
export const listarUsuarios=()=>leer('usuarios',[{nombre:'Administrador Workclothes',email:'admin@workclothes.cl',password:'admin123',rol:'Administrador'}]);
export const registrarUsuario=usuario=>{const lista=listarUsuarios();if(lista.some(u=>u.email===usuario.email))throw Error('El correo ya está registrado');guardar('usuarios',[...lista,{...usuario,rol:'Cliente'}]);};
export const actualizarRol=(email,rol)=>{const lista=listarUsuarios().map(u=>u.email===email?{...u,rol}:u);guardar('usuarios',lista);return lista;};
export const autenticar=(email,clave)=>listarUsuarios().find(u=>u.email===email&&u.password===clave)||null;
export const guardarPedido=(pedido)=>{const lista=leer('pedidos',[]);guardar('pedidos',[...lista,pedido]);};
export const listarPedidos=()=>leer('pedidos',[]);
