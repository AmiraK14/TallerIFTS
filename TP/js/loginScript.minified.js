const _0x42a0f1=_0x5d25;(function(_0x24f836,_0x6e699e){const _0x124181=_0x5d25,_0x41ea97=_0x24f836();while(!![]){try{const _0x348546=-parseInt(_0x124181(0x137))/0x1+-parseInt(_0x124181(0x16f))/0x2+parseInt(_0x124181(0x171))/0x3+parseInt(_0x124181(0x168))/0x4*(parseInt(_0x124181(0x161))/0x5)+-parseInt(_0x124181(0x163))/0x6*(parseInt(_0x124181(0x160))/0x7)+-parseInt(_0x124181(0x12f))/0x8+parseInt(_0x124181(0x15f))/0x9;if(_0x348546===_0x6e699e)break;else _0x41ea97['push'](_0x41ea97['shift']());}catch(_0x47751e){_0x41ea97['push'](_0x41ea97['shift']());}}}(_0x571d,0x2a272),URL=_0x42a0f1(0x13b));let usuariosJson='';$['getJSON'](URL,function(_0x523bec){usuariosJson=_0x523bec;})[_0x42a0f1(0x16b)](function(){agregarNavbar();});function _0x5d25(_0x5c25ed,_0x53308c){const _0x571df0=_0x571d();return _0x5d25=function(_0x5d258e,_0x1c6e76){_0x5d258e=_0x5d258e-0x12f;let _0x282d03=_0x571df0[_0x5d258e];return _0x282d03;},_0x5d25(_0x5c25ed,_0x53308c);}function agregarNavbar(){const _0x287735=_0x42a0f1;var _0x12c4d7=_0x287735(0x145);_0x12c4d7+='<nav\x20class=\x22navbar\x20navbar-dark\x20bg-dark\x20fixed-top\x22>',_0x12c4d7+='<nav\x20class=\x22navbar\x20navbar-dark\x20bg-dark\x20fixed-top\x22>',_0x12c4d7+=_0x287735(0x164),_0x12c4d7+='<div\x20class=\x22row\x22>',_0x12c4d7+=_0x287735(0x141),_0x12c4d7+='<img\x20src=\x22../imagenes/logo_estrella.png\x22\x20id=\x22estrellaLogo\x22\x20class=\x20\x22d-none\x20d-lg-block\x22>',_0x12c4d7+=_0x287735(0x14b),_0x12c4d7+=_0x287735(0x15c),_0x12c4d7+=_0x287735(0x169),_0x12c4d7+=_0x287735(0x14d),_0x12c4d7+='<div\x20class=\x22offcanvas-body\x22>',_0x12c4d7+='<ul\x20class=\x22navbar-nav\x20justify-content-end\x20flex-grow-1\x20pe-3\x22>',_0x12c4d7+='<li\x20class=\x22nav-item\x22>',_0x12c4d7+=_0x287735(0x136),_0x12c4d7+=_0x287735(0x15e),_0x12c4d7+=_0x287735(0x14c),_0x12c4d7+=_0x287735(0x146),_0x12c4d7+=_0x287735(0x14f),_0x12c4d7+='<li><a\x20class=\x22dropdown-item\x22\x20href=\x22../shows.html\x22>En\x20vivo</a></li>',_0x12c4d7+=_0x287735(0x133),_0x12c4d7+=_0x287735(0x138),_0x12c4d7+=_0x287735(0x13d),$(_0x287735(0x15a))['append'](_0x12c4d7);}function validarCampos(){const _0x3bf3cd=_0x42a0f1;mail=$(_0x3bf3cd(0x140))['val'](),pass=$(_0x3bf3cd(0x13e))[_0x3bf3cd(0x131)]();if(mail=='')llamarModalIncompleto(_0x3bf3cd(0x134));else pass==''?llamarModalIncompleto(_0x3bf3cd(0x16d)):sha256(pass)[_0x3bf3cd(0x15d)](function(_0x3c9d7c){checkUserData(mail,_0x3c9d7c);});}function checkUserData(_0x493a95,_0x260ba3){const _0x2e8d26=_0x42a0f1;usuarios=usuariosJson[_0x2e8d26(0x130)],usuarioExistente=![],indiceUsuario='';for(i=0x0;i<usuarios['length'];i++){_0x493a95==usuarios[i][_0x2e8d26(0x13c)]&&(usuarioExistente=!![],indiceUsuario=i);}usuarioExistente==![]?llamarModalUsuarioInexistente(_0x493a95):(passParsed=JSON[_0x2e8d26(0x151)](usuariosJson[_0x2e8d26(0x130)][indiceUsuario][_0x2e8d26(0x13f)]),passParsed=JSON[_0x2e8d26(0x13a)](passParsed),_0x260ba3==passParsed?(llamarModalIngresoExitoso(_0x493a95),$(_0x2e8d26(0x16c))[_0x2e8d26(0x132)]()):llamarModalContraseñaIncorrecta());}function _0x571d(){const _0x4b6eda=['show','<img\x20src=\x22../imagenes/logo_nombrebanda.png\x22\x20id=\x22nombreLogo\x22></a></div>','<a\x20class=\x22nav-link\x20dropdown-toggle\x22\x20href=\x22musica.html\x22\x20id=\x22offcanvasNavbarDropdown\x22\x20role=\x22button\x22\x20data-bs-toggle=\x22dropdown\x22\x20aria-expanded=\x22false\x22>Nuestra\x20música</a>','<div\x20class=\x22offcanvas\x20offcanvas-end\x22\x20tabindex=\x22-1\x22\x20id=\x22offcanvasNavbar\x22\x20aria-labelledby=\x22offcanvasNavbarLabel\x22>','#modalContraseñaIncorrecta','<li><a\x20class=\x22dropdown-item\x22\x20href=\x22../musica.html\x22>En\x20línea</a></li>','</div></div></div></div>','stringify','<h5\x20class=\x22modal-title\x22>Acceso\x20denegado</h5>','<h5\x20class=\x22modal-title\x22>Ingreso\x20exitoso</h5>','<div\x20class=\x22modal-footer\x22>','<p>Bienvenido\x20al\x20sistema\x20<strong>','<div\x20class=\x22modal-body\x22>','<div\x20class=\x22modal-header\x22>','<div\x20class=\x22modal-dialog\x22>','<button\x20type=\x22button\x22\x20class=\x22btn-close\x20botonCerrarModal\x22\x20data-bs-dismiss=\x22modal\x22\x20aria-label=\x22Close\x22></button></div>','#headerSecciones','append','<button\x20class=\x22navbar-toggler\x22\x20type=\x22button\x22\x20data-bs-toggle=\x22offcanvas\x22\x20data-bs-target=\x22#offcanvasNavbar\x22\x20aria-controls=\x22offcanvasNavbar\x22>','then','<li\x20class=\x22nav-item\x20dropdown\x22>','4212072zfCzOf','7763PYtxEw','1060AoinHk','<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x20botonCerrarModal\x22\x20data-bs-dismiss=\x22modal\x22>Cerrar</button>','606dPRdRr','<div\x20class=\x22container-fluid\x22>','<div\x20class=\x22modal-content\x22>','#modalUsuarioInexistente','#modalIngresoExitoso','636nutKZe','<span\x20class=\x22navbar-toggler-icon\x22></span></button>','empty','done','#formLogin','contraseña','click','443012arvJLD','<div\x20id=\x22modalUsuarioInexistente\x22\x20class=\x22modal\x22\x20tabindex=\x22-1\x22>','870831HhMaES','<p>La\x20contraseña\x20ingresada\x20es\x20incorrecta</p></div>','1133032TTvDKE','Users','val','submit','<li><a\x20class=\x22dropdown-item\x22\x20href=\x22../merchandising.html\x22>En\x20merchandising</a></li></ul></li>','usuario','<div\x20id=\x22modalIngresoExitoso\x22\x20class=\x22modal\x22\x20tabindex=\x22-1\x22>','<a\x20class=\x22nav-link\x20active\x22\x20aria-current=\x22page\x22\x20href=\x22../nosotros.html\x22>Nosotros</a></li>','144191YpSXLu','<li\x20class=\x22nav-item\x22><a\x20class=\x22nav-link\x20active\x22\x20aria-current=\x22page\x22\x20href=\x22../formulario.html\x22>Contacto</a></li>','<p>El\x20usuario\x20<strong>','parse','../json/datosUsers.json','user','</ul></div></div></div></nav>','#loginInputPassword','password','#loginInputEmail','<a\x20class=\x22navbar-brand\x22\x20href=\x22index.html\x22>','</strong>\x20no\x20se\x20encuentra\x20registrado</p></div>','<strong></p></div>','.botonCerrarModal','<nav\x20class=\x22navbar\x20navbar-dark\x20bg-dark\x20fixed-top\x22>','<ul\x20class=\x22dropdown-menu\x22\x20aria-labelledby=\x22offcanvasNavbarDropdown\x22>','hide','#modalsSection','<div\x20id=\x22modalContraseñaIncorrecta\x22\x20class=\x22modal\x22\x20tabindex=\x22-1\x22>'];_0x571d=function(){return _0x4b6eda;};return _0x571d();}function llamarModalUsuarioInexistente(_0x5c0b6b){const _0x1b7a43=_0x42a0f1;$('#modalsSection')[_0x1b7a43(0x16a)](),miModal=_0x1b7a43(0x170),miModal+=_0x1b7a43(0x158),miModal+=_0x1b7a43(0x165),miModal+=_0x1b7a43(0x157),miModal+=_0x1b7a43(0x152),miModal+=_0x1b7a43(0x159),miModal+=_0x1b7a43(0x156),miModal+=_0x1b7a43(0x139)+_0x5c0b6b+_0x1b7a43(0x142),miModal+=_0x1b7a43(0x154),miModal+=_0x1b7a43(0x162),miModal+=_0x1b7a43(0x150),$('#modalsSection')[_0x1b7a43(0x15b)](miModal),$(_0x1b7a43(0x166))['show'](),$(_0x1b7a43(0x144))[_0x1b7a43(0x16e)](function(){const _0x388f46=_0x1b7a43;$(_0x388f46(0x166))['hide']();});}function llamarModalContraseñaIncorrecta(){const _0x1e4248=_0x42a0f1;$(_0x1e4248(0x148))[_0x1e4248(0x16a)](),miModal=_0x1e4248(0x149),miModal+=_0x1e4248(0x158),miModal+=_0x1e4248(0x165),miModal+=_0x1e4248(0x157),miModal+=_0x1e4248(0x152),miModal+=_0x1e4248(0x159),miModal+='<div\x20class=\x22modal-body\x22>',miModal+=_0x1e4248(0x172),miModal+='<div\x20class=\x22modal-footer\x22>',miModal+=_0x1e4248(0x162),miModal+=_0x1e4248(0x150),$(_0x1e4248(0x148))[_0x1e4248(0x15b)](miModal),$(_0x1e4248(0x14e))[_0x1e4248(0x14a)](),$(_0x1e4248(0x144))['click'](function(){const _0x791ddd=_0x1e4248;$(_0x791ddd(0x14e))[_0x791ddd(0x147)]();});}function llamarModalIngresoExitoso(_0x120fde){const _0x1fce5a=_0x42a0f1;$(_0x1fce5a(0x148))[_0x1fce5a(0x16a)](),miModal=_0x1fce5a(0x135),miModal+='<div\x20class=\x22modal-dialog\x22>',miModal+=_0x1fce5a(0x165),miModal+=_0x1fce5a(0x157),miModal+=_0x1fce5a(0x153),miModal+='<button\x20type=\x22button\x22\x20class=\x22btn-close\x20botonCerrarModal\x22\x20data-bs-dismiss=\x22modal\x22\x20aria-label=\x22Close\x22></button></div>',miModal+=_0x1fce5a(0x156),miModal+=_0x1fce5a(0x155)+_0x120fde+_0x1fce5a(0x143),miModal+=_0x1fce5a(0x154),miModal+='<button\x20type=\x22button\x22\x20class=\x22btn\x20btn-secondary\x20botonCerrarModal\x22\x20data-bs-dismiss=\x22modal\x22>Cerrar</button>',miModal+='</div></div></div></div>',$(_0x1fce5a(0x148))[_0x1fce5a(0x15b)](miModal),$(_0x1fce5a(0x167))[_0x1fce5a(0x14a)](),$(_0x1fce5a(0x144))[_0x1fce5a(0x16e)](function(){const _0xcb2361=_0x1fce5a;$('#modalIngresoExitoso')[_0xcb2361(0x147)]();});}