var Cotizador = (function ($, win, doc) {

    // Botones 
    var btnBC = $('#btnBC');
    var btnNC = $('#btnNC');
    var btnVR = $('#btnVR');

    //Datos Cotización
    var formDC = $('#formDC');
    var CotiSofkit = $('#CotiSofkit');
    var btnCB = $('#btnCB');
    var txtRucDC = $('#txtRucDC');
    var txtRSDC = $('#txtRSDC');
    var txtDDC = $('#txtDDC');
    var txtFechaDC = $('#txtFechaDC');
    var fechaDC = $('#fechaDC');
    var cboMonedaDC = $('#cboMonedaDC');
    var btnAgregar = $('#btnAgregar');
    var tablaDC = $('#tablaDC');
    var btnGCDC = $('#btnGCDC');


    /* Proveedores */
    //Proveedor Dealer
    var btnBD = $('#btnBD');
    var txtNombrePD = $('#txtNombrePD');
    var fechaPD = $('#fechaPD');
    var txtFechaPD = $('#txtFechaPD');
    var tablaPD = $('#tablaPD');

    //Proveedor 1
    var btnBP1 = $('#btnBP1');
    var txtNombreP1 = $('#txtNombreP1');
    var fechaP1 = $('#fechaP1');
    var txtFechaP1 = $('#txtFechaP1');
    var tablaP1 = $('#tablaP1');

    //Proveedor 2
    var btnBP2 = $('#btnBP2');
    var txtNombreP2 = $('#txtNombreP2');
    var fechaP2 = $('#fechaP2');
    var txtFechaP2 = $('#txtFechaP2');
    var tablaP2 = $('#tablaP2');

    //Proveedor 3
    var btnBP3 = $('#btnBP3');
    var txtNombreP3 = $('#txtNombreP3');
    var fechaP3 = $('#fechaP3');
    var txtFechaP3 = $('#txtFechaP3');
    var tablaP3 = $('#tablaP3');

    //Proveedor 4
    var btnBP4 = $('#btnBP4');
    var txtNombreP4 = $('#txtNombreP4');
    var fechaP4 = $('#fechaP4');
    var txtFechaP4 = $('#txtFechaP4');
    var tablaP4 = $('#tablaP4');

    /*Control Empresa*/
    /*Kardex Venta */
    var tablaKV = $('#tablaKV');

    /*Kardex Venta */
    var tablaKC = $('#tablaKC');

    /*Kardex Nota Ingreso */
    var tablaKNI = $('#tablaKNI');

    // Controles de Modales

    /*Modal Buscar Cotizaciones*/
    var modalBC = $('#modal-BC');
    var M_Tabla_BC = $('#M_Tabla_BC');


    /*Modal Buscar Cliente*/
    var modalBCL = $('#modal-BCL');
    var M_txtMBBC = $('#M_txtMBBC');
    var M_btnMBBC = $('#M_btnMBBC');
    var M_tablaBC = $('#M_tablaBC');
    var M_btnNBC = $('#M_btnNBC');
    var M_btnEBC = $('#M_btnEBC');
    var M_btnELBC = $('#M_btnELBC');

    /*Modal Agregar Artículo */
    var modalAP = $('#modal-AP');
    var Form_M_AR = $('#Form_M_AR');
    var M_btnUAP = $('#M_btnUAP');
    var M_txtAAP = $('#M_txtAAP');
    var M_txtA2AP = $('#M_txtA2AP');
    var M_txtCAP = $('#M_txtCAP');
    var M_btnGAP = $('#M_btnGAP');

    /*Modal Manteminiento de Articulos*/
    var modalMA = $('#modal-MA');
    var M_txtBMA = $('#M_txtBMA');
    var M_btnBMA = $('#M_btnBMA');
    var M_Tabla_MA = $('#M_Tabla_MA');
    var M_btnSMA = $('#M_btnSMA');

    /*Modal Manteminiento de Proveedores*/
    var modalMP = $('#modal-MP');
    var M_txtBMP = $('#M_txtBMP');
    var M_btnBMP = $('#M_btnBMP');
    var M_Tabla_MP = $('#M_Tabla_MP');
    var M_btnNMP = $('#M_btnNMP');
    var M_btnEMP = $('#M_btnEMP');
    var M_btnELMP = $('#M_btnELMP');


    /*Modal Cotizar Proveedor*/
    var modalCP = $('#modal-CP');
    var M_txtCPCP = $('#M_txtCPCP');
    var M_txtNPCP = $('#M_txtNPCP');
    var M_txtRCP = $('#M_txtRCP');
    var M_txtRSCP = $('#M_txtRSCP');
    var M_txtMCP = $('#M_txtMCP');
    var M_txtVCCP = $('#M_txtVCCP');
    var M_txtOCP = $('#M_txtOCP');
    var M_btnCHCP = $('#M_btnCHCP');
    var M_btnACP = $('#M_btnACP');

    /*Modal Reglas*/
    var modalR = $('#modal-R');
    var M_Tabla_R = $('#M_Tabla_R');

    var Message = {
        ObtenerTipoBusqueda: "Obteniendo los tipos de busqueda, Por favor espere...",
        GuardarSuccess: "Los datos se guardaron satisfactoriamente",
    }

    // Constructor
    $(Initialize);

    // Implementacion del constructor
    function Initialize() {

        //Initialize Select2 Elements
        $('.select2').select2()

        //Date picker
        CargarControlesDP();

        btnNC.click(function () {
            win.location.reload();
        });
        // Regla 
        btnVR.click(btnVR_click);

        // Cliente 
        btnCB.click(btnCB_click);
        btnGCDC.click(btnGCDC_click);
        M_tablaBC.on('dblclick', 'tr', function () {
            // Desmarca las filas seleccionadas
            M_tablaBC.$('tr.selected').removeClass('selected');
            // Marca la fila actual como seleccionada
            $(this).addClass('selected');

            var rowSelect = app.GetDataOfDataTable(M_tablaBC);
            if (rowSelect !== null) {
                ObtenerCliente(rowSelect);
            }
        });

        // Cotizacion
        btnBC.click(btnBC_click);
        M_Tabla_BC.on('dblclick', 'tr', function () {
            // Desmarca las filas seleccionadas
            M_Tabla_BC.$('tr.selected').removeClass('selected');
            // Marca la fila actual como seleccionada
            $(this).addClass('selected');

            var rowSelect = app.GetDataOfDataTable(M_Tabla_BC, "CotiSofkit");
            if (rowSelect !== null) {
                ObtenerCotizacion(rowSelect);
            }
        });
        btnAgregar.click(btnAgregar_click);

        //<!-- Proveedores  -->
        //Proveedor Dealer
        btnBD.click(btnBD_click);
        //Proveedor 1
        btnBP1.click(btnBP1_click);
        //Proveedor 2
        btnBP2.click(btnBP2_click);
        //Proveedor 3
        btnBP3.click(btnBP3_click);
        //Proveedor 4
        btnBP4.click(btnBP4_click);

        //<!-- Modal Agregar Artículo  -->
        M_btnUAP.click(M_btnUAP_click);
        M_btnGAP.click(M_btnGAP_click);

        //<!--Modal Manteminiento de Articulos-- > 
        M_btnBMA.click(M_btnBMA_click);
        M_Tabla_MA.on('dblclick', 'tr', function () {
            // Desmarca las filas seleccionadas
            M_Tabla_MA.$('tr.selected').removeClass('selected');
            // Marca la fila actual como seleccionada
            $(this).addClass('selected');

            var rowSelect = app.GetDataOfDataTable(M_Tabla_MA);
            if (rowSelect !== null) {
                ObtenerArticulo(rowSelect);
                modalBCL.modal("hide");
            }
        });

        //<!-- Modal Manteminiento de Proveedores  -->
        M_btnBMP.click(M_btnBMP_click);
        M_btnNMP.click(M_btnNMP_click);
        M_btnEMP.click(M_btnEMP_click);
        M_btnELMP.click(M_btnELMP_click);


        //<!-- Modal Cotizar Proveedor  -->

        EditarCeldasTabla();
    };

    function CargarControlesDP() {
        moment.locale('es');

        $('.miDatetimePicker').datetimepicker({
            format: 'DD/MM/YYYY', // Establece el formato de fecha como DD/MM/YYYY
            locale: 'es', // indica el idioma
            // Puedes agregar más opciones según tus necesidades
        });

        app.Event.Disabled($('.miDatetimePicker input'));

    }

    function EditarCeldasTabla() {
        app.EditarTable(tablaDC);
        app.EditarTable(tablaPD);
        app.EditarTable(tablaP1);
        app.EditarTable(tablaP2);
        app.EditarTable(tablaP3);
        app.EditarTable(tablaP4);
    }

    // Cliente 
    function btnCB_click() {
        modalBCL.modal("show");
        ListarCliente();
    }
    function btnGCDC_click() {
        var rules = {
            ruc: {
                required: true,
            },
            razonSocial: {
                required: true,
            },
            direccion: {
                required: true,
            },
            fecha: {
                required: true,
            },
            moneda: {
                required: true,
            }
        };
        var mensaje = {
            ruc: {
                required: "Por favor, ingrese el ruc.",
            },
            razonSocial: {
                required: "Por favor, ingrese la razón social",
            },
            direccion: {
                required: "Por favor, ingrese la dirección",
            },
            fecha: {
                required: "Por favor, ingrese la fecha",
            },
            moneda: {
                required: "Por favor, ingrese la moneda",
            }
        }
        var fnDoneCallback = function (data) {
            var id = CotiSofkit.val();
            //if (id == "0") {
            //    GuardarCliente();
            //} else {
            //    EditarCliente();
            //} 
        };
        app.ValidaForm(formDC, rules, mensaje, fnDoneCallback);
    }
    function ListarCliente() {
        var url = "Cotizador/ListarCliente";
        var method = 'GET';
        var data = {};
        var fnDoneCallback = function (data) {
            var columns = [
                { data: "CODIGO" },
                { data: "RAZONSOCIAL" },
                { data: "DIRECCION" },
            ];
            var columnDefs = [];
            var filtros = {
                pageLength: 5
            };
            var drawCallback = function (settings) {
            }
            app.FillDataTableFiltros(M_tablaBC, data, columns, columnDefs, '#M_tablaBC', filtros, null, drawCallback);
        };
        app.CallAjax(method, url, data, fnDoneCallback);
    }
    function GuardarCliente() {

        //txtFechaDC.val( );
        //cboMonedaDC.val( );
        var url = "Cotizador/GuardarCliente";
        var method = 'POST';
        var data = {
            CODIGO: txtRucDC.val(),
            RAZONSOCIAL: txtRSDC.val(),
            DIRECCION: txtDDC.val()
        };
        var fnDoneCallback = function (data) {
            app.Message.Success("Grabar", Message.GuardarSuccess, "Aceptar", null);
        };
        app.CallAjax(method, url, data, fnDoneCallback);
    }
    function EditarCliente() {
        var url = "Cotizador/EditarCliente";
        var method = 'POST';
        var data = {
            CODIGO: txtRucDC.val(),
            RAZONSOCIAL: txtRSDC.val(),
            DIRECCION: txtDDC.val()
        };
        var fnDoneCallback = function (data) {
            app.Message.Success("Editar", Message.GuardarSuccess, "Aceptar", null);
        };
        app.CallAjax(method, url, data, fnDoneCallback);
    }
    function ObtenerCliente(cliente) {
        txtRucDC.val(cliente.CODIGO);
        txtRSDC.val(cliente.RAZONSOCIAL);
        txtDDC.val(cliente.DIRECCION);
        //txtFechaDC.val(cliente.fecha);
        //cboMonedaDC.val(cliente.Moneda).trigger('change');

        ReadOnlyControles(false);
        CotiSofkit.val("0")

        modalBCL.modal("hide");
    }

    // Cotizacion 
    function btnBC_click() {
        ListarCotizacion();
    }
    function ObtenerCotizacion(idcotizacion) {
        modalBC.modal("hide");
        CotiSofkit.val(idcotizacion);
        ReadOnlyControles(true);

        var url = "Cotizador/ObtenerCotizacion";
        var method = 'POST';
        var data = {
            idcotizacion: idcotizacion,
        };
        var fnDoneCallback = function (data) {
            var item = data.Data[0];
            // Se llena el array temporal si existe una cotizacion 
            Array.from(data.Data).forEach(function (elemento) {
                DataCotizacion.Data.push(elemento);
            });

            // Cotizacion
            txtRucDC.val(item.codcliente);
            txtRSDC.val(item.Cliente);
            txtDDC.val(item.dircliente);
            txtFechaDC.val(item.fecha);
            cboMonedaDC.val(item.Moneda).trigger('change');
            LlenarTablaDatosCotizacion(data);

            //<!-- Proveedores  --> 
            txtNombrePD.val(item.NomDealer);
            txtFechaPD.val(item.fecD);
            LlenarTablaProveedorDealer(data);

            txtNombreP1.val(item.NomP1);
            txtFechaP1.val(item.FecP1);
            LlenarTablaProveedorP1(data);

            txtNombreP2.val(item.NomP2);
            txtFechaP2.val(item.FecP2);
            LlenarTablaProveedorP2(data);

            txtNombreP3.val(item.NomP3);
            txtFechaP3.val(item.FecP3);
            LlenarTablaProveedorP3(data);

            txtNombreP4.val(item.NomP4);
            txtFechaP4.val(item.FecP4);
            LlenarTablaProveedorP4(data);

            //<!-- Control Empresa  --> -- pendiente
            LlenarTablaKVenta(data);
            LlenarTablaKCotizacion(data);
            LlenarTablaKNotaIngreso(data);

        };
        app.CallAjax(method, url, data, fnDoneCallback);
    }
    function ReadOnlyControles(flag) {
        if (flag) {
            app.Event.Enable(btnBC);

            app.Event.Disabled(btnCB);
            app.Event.Disabled(txtFechaDC);
            app.Event.Disabled(cboMonedaDC);
            app.Event.Disabled(txtFechaPD);
            app.Event.Disabled(txtFechaP1);
            app.Event.Disabled(txtFechaP2);
            app.Event.Disabled(txtFechaP3);
            app.Event.Disabled(txtFechaP4);

        } else {
            app.Event.Disabled(btnBC);
            app.Event.Enable(btnCB);
            app.Event.Enable(txtFechaDC);
            app.Event.Enable(cboMonedaDC);
            app.Event.Enable(txtFechaPD);
            app.Event.Enable(txtFechaP1);
            app.Event.Enable(txtFechaP2);
            app.Event.Enable(txtFechaP3);
            app.Event.Enable(txtFechaP4);
        }
    }
    function LlenarTablaDatosCotizacion(data) {
        var columns = [
            { data: "item" },
            { data: "cant" },
            { data: "Cod" },
            { data: "NomArticulo" },
            { data: "Precio" },
            { data: "MarcaPrecio" },
            { data: "item" }
        ];
        var columnDefs = [
            {
                "targets": [6],
                "visible": true,
                "className": "text-center",
                'render': function (data, type, full, meta) {
                    return "<center>" +
                        '<a class="btn btn-danger btn-xs"  title="Eliminar" href="javascript:Cotizador.EliminarArticulo(' + meta.row + ')"><i class="fa fa-trash" aria-hidden="true"></i></a>' +
                        "</center> ";
                }
            },
            {
                targets: 4,
                className: 'editable',
                createdCell: function (td, cellData, rowData, row, col) {
                    $(td).attr('data-type', 'numeric');
                }
            },
            {
                targets: 5,
                className: 'editable',
                createdCell: function (td, cellData, rowData, row, col) {
                    $(td).attr('data-type', 'alphanumeric');
                }
            }
        ];

        var drawCallback = function () {
        }
        app.FillDataTable(tablaDC, data, columns, columnDefs, '#tablaDC', null, null, drawCallback);

    }
    function LlenarTablaProveedorDealer(data) {

        var columns = [
            { data: "item" },
            { data: "PrecioD" },
            { data: "MarcaD" }
        ];
        var columnDefs = [
            {
                targets: 1,
                className: 'editable',
                createdCell: function (td, cellData, rowData, row, col) {
                    $(td).attr('data-type', 'numeric');
                }
            },
            {
                targets: 2,
                className: 'editable',
                createdCell: function (td, cellData, rowData, row, col) {
                    $(td).attr('data-type', 'alphanumeric');
                }
            }
        ];
        app.FillDataTable(tablaPD, data, columns, columnDefs, '#tablaPD');

    }
    function LlenarTablaProveedorP1(data) {
        var columns = [
            { data: "item" },
            { data: "PrecioP1" },
            { data: "MarcaP1" }
        ];
        var columnDefs = [
            {
                targets: 1,
                className: 'editable',
                createdCell: function (td, cellData, rowData, row, col) {
                    $(td).attr('data-type', 'numeric');
                }
            },
            {
                targets: 2,
                className: 'editable',
                createdCell: function (td, cellData, rowData, row, col) {
                    $(td).attr('data-type', 'alphanumeric');
                }
            }
        ];
        app.FillDataTable(tablaP1, data, columns, columnDefs, '#tablaP1');

    }
    function LlenarTablaProveedorP2(data) {
        var columns = [
            { data: "item" },
            { data: "PrecioP2" },
            { data: "MarcaP2" }
        ];
        var columnDefs = [
            {
                targets: 1,
                className: 'editable',
                createdCell: function (td, cellData, rowData, row, col) {
                    $(td).attr('data-type', 'numeric');
                }
            },
            {
                targets: 2,
                className: 'editable',
                createdCell: function (td, cellData, rowData, row, col) {
                    $(td).attr('data-type', 'alphanumeric');
                }
            }
        ];
        app.FillDataTable(tablaP2, data, columns, columnDefs, '#tablaP2');

    }
    function LlenarTablaProveedorP3(data) {
        var columns = [
            { data: "item" },
            { data: "PrecioP3" },
            { data: "MarcaP3" }
        ];
        var columnDefs = [
            {
                targets: 1,
                className: 'editable',
                createdCell: function (td, cellData, rowData, row, col) {
                    $(td).attr('data-type', 'numeric');
                }
            },
            {
                targets: 2,
                className: 'editable',
                createdCell: function (td, cellData, rowData, row, col) {
                    $(td).attr('data-type', 'alphanumeric');
                }
            }
        ];
        app.FillDataTable(tablaP3, data, columns, columnDefs, '#tablaP3');

    }
    function LlenarTablaProveedorP4(data) {
        var columns = [
            { data: "item" },
            { data: "PrecioP4" },
            { data: "MarcaP4" }
        ];
        var columnDefs = [
            {
                targets: 1,
                className: 'editable',
                createdCell: function (td, cellData, rowData, row, col) {
                    $(td).attr('data-type', 'numeric');
                }
            },
            {
                targets: 2,
                className: 'editable',
                createdCell: function (td, cellData, rowData, row, col) {
                    $(td).attr('data-type', 'alphanumeric');
                }
            }
        ];
        app.FillDataTable(tablaP4, data, columns, columnDefs, '#tablaP4');

    }
    function LlenarTablaKVenta(data) {
        var columns = [
            { data: "item" },
            { data: "KVVenta" },
            { data: "KFVenta" },
            { data: "KCVenta" }
        ];
        var columnDefs = [];
        app.FillDataTable(tablaKV, data, columns, columnDefs, '#tablaKV');

    }
    function LlenarTablaKCotizacion(data) {
        var columns = [
            { data: "item" },
            { data: "KVCotizacion" },
            { data: "KFCotizacion" },
            { data: "KCCotizacion" }
        ];
        var columnDefs = [];
        app.FillDataTable(tablaKC, data, columns, columnDefs, '#tablaKC');

    }
    function LlenarTablaKNotaIngreso(data) {
        var columns = [
            { data: "item" },
            { data: "KVNotaIngreso" },
            { data: "KFNotaIngreso" },
            { data: "KCNotaIngreso" }
        ];
        var columnDefs = [];
        app.FillDataTable(tablaKNI, data, columns, columnDefs, '#tablaKNI');

    }
    function CargandoDatosControlEmpresa(data) {
        var dataKarderVenta = { Data: [] };
        var dataKardexCotizacion = { Data: [] };
        var KardexNotaIngreso = { Data: [] };
        var deferreds = [];


        data.Data.forEach(function (v) {
            if (v.Tipo === undefined) {
                dataKarderVenta.Data.push({
                    item: v.item,
                    KVVenta: v.KVVenta,
                    KCVenta: v.KCVenta,
                    KFVenta: v.KFVenta
                });
                dataKardexCotizacion.Data.push({
                    item: v.item,
                    KVCotizacion: v.KVCotizacion,
                    KCCotizacion: v.KCCotizacion,
                    KFCotizacion: v.KFCotizacion,
                });
                KardexNotaIngreso.Data.push({
                    item: v.item,
                    KVNotaIngreso: v.KVNotaIngreso,
                    KCNotaIngreso: v.KCNotaIngreso,
                    KFNotaIngreso: v.KFNotaIngreso,
                });
            }
        });
        var datosKardezNuevos = data.Data.filter(function (objeto) {
            return objeto.Tipo === "N";
        });
        $.each(datosKardezNuevos, function (index, value) {
            var consultaDeferred;
            var obj = {
                codigo: value.Cod,
                codcliente: value.codcliente
            };
            var fnDoneCallbackKV = function (r) {
                r.Data.forEach(function (elemento) {
                    elemento.item = value.item;
                });
                dataKarderVenta.Data = dataKarderVenta.Data.concat(r.Data);
            };
            consultaDeferred = GetKarderVenta(obj, fnDoneCallbackKV);
            deferreds.push(consultaDeferred);

            var fnDoneCallbackKC = function (r) {
                r.Data.forEach(function (elemento) {
                    elemento.item = value.item;
                });
                dataKardexCotizacion.Data = dataKardexCotizacion.Data.concat(r.Data);
            };
            consultaDeferred = GetKardexCotizacion(obj, fnDoneCallbackKC);
            deferreds.push(consultaDeferred);

            var fnDoneCallbackNI = function (r) {
                r.Data.forEach(function (elemento) {
                    elemento.item = value.item;
                });
                KardexNotaIngreso.Data = KardexNotaIngreso.Data.concat(r.Data);
            };
            consultaDeferred = GetKardexNotaIngreso(obj, fnDoneCallbackNI);
            deferreds.push(consultaDeferred);

        });

        // Cuando todas las consultas AJAX hayan terminado, resuelve la promesa
        $.when.apply($, deferreds).then(function () {
            //console.log("Todas las consultas AJAX y el bucle han terminado");

            LlenarTablaKarderVenta(dataKarderVenta);
            LlenarTablaKardexCotizacion(dataKardexCotizacion);
            LlenarTablaKardexNotaIngreso(KardexNotaIngreso);

        }).catch(function (error) {
            // El código en caso de error
            //app.Message.Error("Error en Control Empresa", error); 
        });
    }
    function btnAgregar_click() {
        var ruc = txtRucDC.val();
        var fecha = txtFechaDC.val();
        var moneda = cboMonedaDC.val();
        if (ruc != "" && fecha != "" && moneda != "") {
            modalAP.modal("show");
            M_txtAAP.val("");
            M_txtA2AP.val("");
            M_txtCAP.val("");
        } else {
            app.Message.Info("Aviso", "Por favor, ingrese un cliente, fecha y moneda para poder agregar un articulo.")
        }
    }

    // Regla 
    function btnVR_click() {
        var url = "Cotizador/ObtenerReglas";
        var method = 'GET';
        var data = {};
        var fnDoneCallback = function (data) {
            modalR.modal('show');
            var columns = [
                { data: "Nombre" },
                { data: "Dealer" },
                { data: "Alternativo" },
                { data: "Regla1" },
                { data: "NOExecede" },
                { data: "valmin" },
                { data: "valmax" },
                { data: "ID" }
            ];
            var columnDefs = [

                {
                    "targets": [7],
                    'render': function (data, type, full, meta) {
                        var htmlIcheck = '<div class="icheck-primary d-inline" >' +
                            '<input type="checkbox" id="checkbox' + full.ID + '" checked="1">' +
                            '<label for="checkbox' + full.ID + '">' +
                            '</label>' +
                            '</div>';

                        return htmlIcheck;

                    }
                },

            ];
            app.FillDataTable(M_Tabla_R, data, columns, columnDefs, '#M_Tabla_R');

        };
        app.CallAjax(method, url, data, fnDoneCallback);
    }

    //<!-- Proveedores  -->
    //Proveedor Dealer
    function btnBD_click() {
        AbrirModalProveedores();
    }

    function btnBP1_click() {
        AbrirModalProveedores();
    }

    function btnBP2_click() {
        AbrirModalProveedores();
    }

    function btnBP3_click() {
        AbrirModalProveedores();
    }

    function btnBP4_click() {
        AbrirModalProveedores();
    }

    //<!-- Control Empresa  -->
    //  Kardex Venta 
    function GetKarderVenta(data, fnDoneCallback) {
        var url = "Cotizador/KardexVenta";
        var method = 'POST';
        return app.CallAjax(method, url, data, fnDoneCallback);
    }
    function LlenarTablaKarderVenta(data) {
        var columns = [
            { data: "item" },
            { data: "PRECIO" },
            { data: "FECHA" },
            { data: "CLIENTE" }
        ];
        var columnDefs = [
            {
                "targets": [2],
                'render': function (data, type, full, meta) {
                    var fechaFormateada = moment(data, 'D/M/YYYY HH:mm:ss').format('DD/MM/YYYY');
                    return fechaFormateada;
                }
            }
        ];
        app.FillDataTable(tablaKV, data, columns, columnDefs, '#tablaKV');
    }
    //  Kardex Cotización
    function GetKardexCotizacion(data, fnDoneCallback) {
        var url = "Cotizador/KardexCotizacion";
        var method = 'POST';
        return app.CallAjax(method, url, data, fnDoneCallback);
    }
    function LlenarTablaKardexCotizacion(data) {
        var columns = [
            { data: "item" },
            { data: "PRECIO" },
            { data: "FECHA" },
            { data: "CLIENTE" }
        ];
        var columnDefs = [
            {
                "targets": [2],
                'render': function (data, type, full, meta) {
                    var fechaFormateada = moment(data, 'D/M/YYYY HH:mm:ss').format('DD/MM/YYYY');
                    return fechaFormateada;
                }
            }
        ];
        app.FillDataTable(tablaKC, data, columns, columnDefs, '#tablaKC');
    }
    //  Kardex Nota Ingreso
    function GetKardexNotaIngreso(data, fnDoneCallback) {
        var url = "Cotizador/KardexNotaIngreso";
        var method = 'POST';
        return app.CallAjax(method, url, data, fnDoneCallback);
    }
    function LlenarTablaKardexNotaIngreso(data) {
        var columns = [
            { data: "item" },
            { data: "PRECIO" },
            { data: "FECHA" },
            { data: "CLIENTE" }
        ];
        var columnDefs = [
            {
                "targets": [2],
                'render': function (data, type, full, meta) {
                    var fechaFormateada = moment(data, 'D/M/YYYY HH:mm:ss').format('DD/MM/YYYY');
                    return fechaFormateada;
                }
            }
        ];
        app.FillDataTable(tablaKNI, data, columns, columnDefs, '#tablaKNI');
    }


    //<!-- Modal Buscar Cotizaciones -->
    function ListarCotizacion() {
        var url = "Cotizador/ListarCotizacion";
        var method = 'GET';
        var data = {};
        var fnDoneCallback = function (data) {
            modalBC.modal('show');
            var columns = [
                { data: "fecha" },
                { data: "Cliente" },
                { data: "CotiStarFoft" },
                { data: "CotiSofkit" },
            ];
            var columnDefs = [
                {
                    "targets": [3],
                    "visible": false,
                },
                {
                    "targets": [0],
                    'render': function (data, type, full, meta) {
                        var fechaFormateada = moment(data, 'D/M/YYYY HH:mm:ss').format('DD/MM/YYYY');
                        return fechaFormateada;
                    }
                }

            ];
            var filtros = {
                pageLength: 10
            };
            var drawCallback = function (settings) {
            }

            app.FillDataTableFiltros(M_Tabla_BC, data, columns, columnDefs, "#M_Tabla_BC", filtros, null, drawCallback);

        };
        app.CallAjax(method, url, data, fnDoneCallback);
    }

    //<!-- Modal Buscar Cliente -->

    //<!-- Modal Agregar Articulos  -->
    var DataCotizacion = { Data: [] };
    function M_btnUAP_click() {
        modalMA.modal("show");
        ListarArticulos();
    }
    function M_btnGAP_click() {

        var rules = {
            codigo: {
                required: true,
            },
            descripcion: {
                required: true,
            },
            cantidad: {
                required: true,
            }
        };
        var mensaje = {
            codigo: {
                required: "Por favor, ingrese el código.",
            },
            descripcion: {
                required: "Por favor, ingrese la descripción",
            },
            cantidad: {
                required: "Por favor, ingrese la cantidad",
            }
        }
        var fnDoneCallback = function () {
            modalAP.modal("hide");
            var correlativo = generarCorrelativo();

            var obj = {
                Tipo: "N", // -> significa que es nuevo
                //Cliente
                "codcliente": txtRucDC.val().trim(),
                "Cliente": txtRSDC.val().trim(),
                "dircliente": txtDDC.val().trim(),
                "item": correlativo,
                "cant": M_txtCAP.val().trim(),
                "Cod": M_txtAAP.val().trim(),
                "NomArticulo": M_txtA2AP.val().trim(),
                "fecha": txtFechaDC.val().trim(),
                "Moneda": cboMonedaDC.val(),
                "Precio": 0,
                "MarcaPrecio": "",

                // DEALER
                "PrecioD": 0,
                "MarcaD": "",

                // Proveedor 1
                "PrecioP1": 0,
                "MarcaP1": "",

                // Proveedor 2
                "PrecioP2": 0,
                "MarcaP2": "",

                // Proveedor 3
                "PrecioP3": 0,
                "MarcaP3": "",

                // Proveedor 4
                "PrecioP4": 0,
                "MarcaP4": "",
            }
            DataCotizacion.Data.push(obj);

            LlenarTablaDatosCotizacion(DataCotizacion);
            LlenarTablaProveedorDealer(DataCotizacion);
            LlenarTablaProveedorP1(DataCotizacion);
            LlenarTablaProveedorP2(DataCotizacion);
            LlenarTablaProveedorP3(DataCotizacion);
            LlenarTablaProveedorP4(DataCotizacion);
            CargandoDatosControlEmpresa(DataCotizacion);
        };
        app.ValidaForm(Form_M_AR, rules, mensaje, fnDoneCallback);
    }
    function ObtenerArticulo(item) {
        M_txtAAP.val(item.CODIGO);
        M_txtA2AP.val(item.DESCRIPCION);
        modalMA.modal("hide");
    }
    function EliminarArticulo(row) {
        var fnAceptarCallback = function () {
            var deferreds = [];
            var data = app.GetValueRowCellOfDataTable(tablaDC, row);

            var tempData = [];
            DataCotizacion.Data.map(function (v, i) {
                tempData.push(v);
            });

            var index = $.inArray(data, tempData);
            tempData.splice(index, 1);

            DataCotizacion = { Data: [] };
            $.each(tempData, function (index, value) {
                var deferred = $.Deferred();
                var obj = {
                    Tipo: value.Tipo,
                    //Cliente
                    "codcliente": value.codcliente,
                    "Cliente": value.Cliente,
                    "dircliente": value.dircliente,
                    "item": value.item,
                    "cant": value.cant,
                    "Cod": value.Cod,
                    "NomArticulo": value.NomArticulo,
                    "fecha": value.fecha,
                    "Moneda": value.Moneda,
                    "Precio": value.Precio,
                    "MarcaPrecio": value.MarcaPrecio,

                    // DEALER
                    "PrecioD": value.PrecioD,
                    "MarcaD": value.MarcaD,

                    // Proveedor 1
                    "PrecioP1": value.PrecioP1,
                    "MarcaP1": value.MarcaP1,

                    // Proveedor 2
                    "PrecioP2": value.PrecioP2,
                    "MarcaP2": value.MarcaP2,

                    // Proveedor 3
                    "PrecioP3": value.PrecioP3,
                    "MarcaP3": value.MarcaP3,

                    // Proveedor 4
                    "PrecioP4": value.PrecioP4,
                    "MarcaP4": value.MarcaP4,

                    // kardex
                    "KVVenta": value.KVVenta,
                    "KCVenta": value.KCVenta,
                    "KFVenta": value.KFVenta,
                    "KVCotizacion": value.KVCotizacion,
                    "KCCotizacion": value.KCCotizacion,
                    "KFCotizacion": value.KFCotizacion,
                    "KVNotaIngreso": value.KVNotaIngreso,
                    "KCNotaIngreso": value.KCNotaIngreso,
                    "KFNotaIngreso": value.KFNotaIngreso

                }
                deferred.resolve()
                DataCotizacion.Data.push(obj);
                deferreds.push(deferred.promise());
            });

            $.when.apply($, deferreds).then(function () {

                LlenarTablaDatosCotizacion(DataCotizacion);
                LlenarTablaProveedorDealer(DataCotizacion);
                LlenarTablaProveedorP1(DataCotizacion);
                LlenarTablaProveedorP2(DataCotizacion);
                LlenarTablaProveedorP3(DataCotizacion);
                LlenarTablaProveedorP4(DataCotizacion);
                LlenarTablaKVenta(DataCotizacion);
                LlenarTablaKCotizacion(DataCotizacion);
                LlenarTablaKNotaIngreso(DataCotizacion);
            }).catch(function (error) {
                /* debugger;*/
                // El código en caso de error
                //app.Message.Error("Error en Control Empresa", error);
            });

        };

        app.Message.Confirm("Confirmar", "¿Estas seguro de eliminar el registro?", "Aceptar", "Cancelar", fnAceptarCallback);

    }




    //<!--Modal Manteminiento de Articulos-- > 
    function M_btnBMA_click() {
        ListarArticulos();
    }
    function ListarArticulos() {
        var url = "Cotizador/ListarArticulos";
        var method = 'POST';
        var data = {
            descripcion: M_txtBMA.val().trim() ?? ""
        };
        var fnDoneCallback = function (data) {
            var columns = [
                { data: "CODIGO" },
                { data: "DESCRIPCION" }
            ];
            var columnDefs = [];

            var filtros = {
                pageLength: 10
            };
            var drawCallback = function (settings) {
            }

            app.FillDataTableFiltros(M_Tabla_MA, data, columns, columnDefs, "#M_Tabla_MA", filtros, null, drawCallback);

        };
        app.CallAjax(method, url, data, fnDoneCallback);
    }

    //<!-- Modal Manteminiento de Proveedores  -->
    function M_btnBMP_click() {
        ListarProveedores();
    }
    function M_btnNMP_click() {
        var filasTabla = M_Tabla_MP.find("tbody tr");
        if (filasTabla.length == 0) {
            app.Message.Info("Aviso", "Por favor, seleccione un proveedor para continuar")
            return;
        }

        var rowSelect = app.GetDataOfDataTable(M_Tabla_MP);
        if (rowSelect !== null) {
            modalCP.modal("show");
            M_txtCPCP.val(rowSelect.CODIGO);
            M_txtNPCP.val("");
            //.val(rowSelect.DIRECCION);
            M_txtRSCP.val(rowSelect.RAZONSOCIAL);
            M_txtRCP.val(rowSelect.CODIGO);
        }
    }
    function M_btnEMP_click() {
        modalCP.modal("show");
    }
    function M_btnELMP_click() {
    }

    function AbrirModalProveedores() {
        var ruc = txtRucDC.val();
        if (ruc != "") {
            M_txtBMP.val('');
            modalMP.modal("show");
        } else {
            app.Message.Info("Aviso", "Por favor, ingrese un cliente para poder agregar un articulo.")
        }
    }
    function ListarProveedores() {
        var url = "Cotizador/ListarCliente";
        var method = 'GET';
        var data = {};
        var fnDoneCallback = function (data) {
            var columns = [
                { data: "CODIGO" },
                { data: "RAZONSOCIAL" },
                { data: "DIRECCION" },
                { data: "TELEFONO" },
                { data: "RUC" },
            ];
            var columnDefs = [];
            var filtros = {
                pageLength: 5
            };
            var drawCallback = function (settings) {
            }
            app.FillDataTableFiltros(M_Tabla_MP, data, columns, columnDefs, '#M_Tabla_MP', filtros, null, drawCallback);
        };
        app.CallAjax(method, url, data, fnDoneCallback);

    }

    //<!-- Modal Cotizar Proveedor  -->



    // Generando Correlativo 
    // Función para generar un correlativo único de 4 dígitos
    function generarCorrelativo() {
        // Generar un número aleatorio entre 0 y 9999
        var numeroAleatorio = Math.floor(Math.random() * 10000);

        // Formatear el número para que tenga 4 dígitos
        var correlativo = ("000" + numeroAleatorio).slice(-4);

        return correlativo;
    }

    return {
        EliminarArticulo: EliminarArticulo
    }


})(window.jQuery, window, document);