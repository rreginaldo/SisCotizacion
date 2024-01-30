var Cotizador = (function ($, win, doc) {

    // Botones 
    var btnBC = $('#btnBC');
    var btnNC = $('#btnNC');
    var btnVR = $('#btnVR');

    //Datos Cliente 
    var btnCB = $('#btnCB');
    var txtNombreDC = $('#txtNombreDC');
    var txtApellidosDC = $('#txtApellidosDC');
    var txtCorreoDC = $('#txtCorreoDC');
    var btnAgregar = $('#btnBC');
    var btnQuitar = $('#btnBC');
    var tablaDC = $('#tablaDC');

    // Precio Sugerido 
    var btnGC = $('#btnGC');
    var fechaPS = $('#fechaPS');
    var txtFechaPS = $('#txtFechaPS');
    var cboMoneda = $('#cboMoneda');
    var tablaPS = $('#tablaPS');


    /* Proveedores */
    //Proveedor Dealer
    var btnBD = $('#btnBD');
    var txtNombrePD = $('#txtNombrePD');
    var fechaPD = $('#fechaPD');
    var txtFechaPD = $('#txtFechaPD');
    var txtMonedaPD = $('#txtMonedaPD');
    var tablaPD = $('#tablaPD');

    //Proveedor 1
    var btnBP1 = $('#btnBP1');
    var txtNombreP1 = $('#txtNombreP1');
    var fechaP1 = $('#fechaP1');
    var txtFechaP1 = $('#txtFechaP1');
    var txtMonedaP1 = $('#txtMonedaP1');
    var tablaP1 = $('#tablaP1');

    //Proveedor 2
    var btnBP2 = $('#btnBP2');
    var txtNombreP2 = $('#txtNombreP2');
    var fechaP2 = $('#fechaP2');
    var txtFechaP2 = $('#txtFechaP2');
    var txtMonedaP2 = $('#txtMonedaP2');
    var tablaP2 = $('#tablaP2');

    //Proveedor 3
    var btnBP3 = $('#btnBP3');
    var txtNombreP3 = $('#txtNombreP3');
    var fechaP3 = $('#fechaP3');
    var txtFechaP3 = $('#txtFechaP3');
    var txtMonedaP3 = $('#txtMonedaP3');
    var tablaP3 = $('#tablaP3');

    //Proveedor 4
    var btnBP4 = $('#btnBP4');
    var txtNombreP4 = $('#txtNombreP4');
    var fechaP4 = $('#fechaP4');
    var txtFechaP4 = $('#txtFechaP4');
    var txtMonedaP4 = $('#txtMonedaP4');
    var tablaP4 = $('#tablaP4');

    /*Control Empresa*/
    /*Kardex Venta */
    var txtMP_KV = $('#txtMP_KV');
    var fechaKV = $('#fechaKV');
    var txtFechaKV = $('#txtFechaKV');
    var txtCKV = $('#txtCKV');
    var tablaKV = $('#tablaKV');

    /*Kardex Venta */
    var txtMP_KC = $('#txtMP_KC');
    var fechaKC = $('#fechaKC');
    var txtFechaKC = $('#txtFechaKC');
    var txtCKC = $('#txtCKC');
    var tablaKC = $('#tablaKC');

    /*Kardex Nota Ingreso */
    var txtMP_KNI = $('#txtMP_KNI');
    var fechaKNI = $('#fechaKNI');
    var txtFechaKNI = $('#txtFechaKNI');
    var txtPKNI = $('#txtPKNI');
    var tablaKNI = $('#tablaKNI');


    // Controles de Modales

    /*Modal Buscar Cotizaciones*/
    var modalBC = $('#modal-BC');
    var M_Tabla_BC = $('#M_Tabla_BC');


    /*Modal Buscar Cliente*/
    var modalBCL = $('#modal-BCL');
    var M_cboOrden = $('#M_cboOrden');
    var M_txtMBBC = $('#M_txtMBBC');
    var M_tablaBC = $('#M_tablaBC');
    var M_btnNBC = $('#M_btnNBC');
    var M_btnEBC = $('#M_btnEBC');
    var M_btnELBC = $('#M_btnELBC');

    /*Modal Agregar Producto */
    var modalAP = $('#modal-AP');
    var M_txtAAP = $('#M_txtAAP');
    var M_txtA2AP = $('#M_txtA2AP');
    var M_txtCAP = $('#M_txtCAP');
    var M_btnGAP = $('#M_btnGAP');

    /*Modal Manteminiento de Articulos*/
    var modalMA = $('#modal-MA');
    var M_cboOMA = $('#M_cboOMA');
    var M_txtBMA = $('#M_txtBMA');
    var M_btnBMA = $('#M_btnBMA');
    var M_checkboxS = $('#M_checkboxS');
    var M_btnSMA = $('#M_btnSMA');

    /*Modal Manteminiento de Proveedores*/
    var modalMP = $('#modal-MP');
    var M_cboOMP = $('#M_cboOMP');
    var M_txtBMA = $('#M_txtBMA');
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
    var M_txtCPCP = $('#M_txtCPCP');
    var M_txtCPCP = $('#M_txtCPCP');
    var M_txtCPCP = $('#M_txtCPCP');
    var M_txtCPCP = $('#M_txtCPCP');



    // Constructor
    $(Initialize);

    // Implementacion del constructor
    function Initialize() {

        //Initialize Select2 Elements
        $('.select2').select2()

        //Date picker
        CargarControlesDP();


        // Regla 
        btnVR.click(btnVR_click);

        // Cliente 
        btnCB.click(btnCB_click);

        // Cotizacion
        btnBC.click(btnBC_click)

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

    };

    function CargarControlesDP() {
        $('#fechaPS').datetimepicker({
            format: 'L',
        });

        $('#fechaPD').datetimepicker({
            format: 'L',
        });

        $('#fechaP1').datetimepicker({
            format: 'L',
        });

        $('#fechaP2').datetimepicker({
            format: 'L',
        });

        $('#fechaP3').datetimepicker({
            format: 'L',
        });

        $('#fechaP4').datetimepicker({
            format: 'L',
        });

        $('#fechaKV').datetimepicker({
            format: 'L',
        });

        $('#fechaKC').datetimepicker({
            format: 'L',
        });

        $('#fechaKNI').datetimepicker({
            format: 'L',
        });
    }


    // Cliente 
    function btnCB_click() {
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
            app.FillDataTable(M_tablaBC, data, columns, columnDefs, '#M_tablaBC');
        };
        app.CallAjax(method, url, data, fnDoneCallback);
    }

    // Cotizacion 
    function btnBC_click() {
        var url = "Cotizador/BuscarCotizacion";
        var method = 'GET';
        var data = {};
        var fnDoneCallback = function (data) {
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
                        debugger;
                        var fechaFormateada = moment(data, 'D/M/YYYY HH:mm:ss').format('DD/MM/YYYY');

                        return fechaFormateada;
                    }
                }

            ];
            app.FillDataTable(M_Tabla_BC, data, columns, columnDefs, '#M_Tabla_BC');
        };
        app.CallAjax(method, url, data, fnDoneCallback);
    }

    // Regla 
    function btnVR_click() {
        var url = "Cotizador/ObtenerReglas";
        var method = 'GET';
        var data = {};
        var fnDoneCallback = function (data) {
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
    //Proveedor Dealer 
    function btnBD_click() {
        modalMP.modal("show");
    }

    function btnBP1_click() {
        modalMP.modal("show");
    }

    function btnBP2_click() {
        modalMP.modal("show");
    }

    function btnBP3_click() {
        modalMP.modal("show");
    }

    function btnBP4_click() {
        modalMP.modal("show");
    }



    // ----------------------- EJEMPLOO -----------------------

    var $btnNuevaVenta = $('#btnNuevaVenta');

    // parametros de busqueda
    var parentBusqueda = $('#parentBusqueda');
    var cboTipoVenta = $('#cboTipoVenta');
    var cboCliente = $('#cboCliente');
    var txt_numComprobante = $('#txt_numComprobante');
    var txt_fecha_registro = $('#txt_fecha_registro');

    var btnBuscar = $('#btnBuscar');
    var tblListadoVentas = $('#tblListadoVentas');
    var btn_sp_agregar = $('#btn_sp_agregar');

    // Modal
    var modalVentas = $('#modalVentas');
    var titleModalVenta = $('#titleModalVenta');
    var formModal = $('#formModal');
    var parentModal = $('#parentModal');
    // informacion de Venta  
    var cbo_p_cliente = $('#cbo_p_cliente');
    var cbo_p_tipoVenta = $('#cbo_p_tipoVenta');
    var txt_p_observacion = $('#txt_p_observacion');
    var txtFechaEmision = $('#txtFechaEmision');

    //Venta Detalle
    var cbo_ps_sucursal = $('#cbo_ps_sucursal');
    var txt_ps_stockactual = $('#txt_ps_stockactual');
    var txt_ps_cantidad = $('#txt_ps_cantidad');
    var txt_ps_unitario = $('#txt_ps_unitario');
    var txt_ps_precioVenta = $('#txt_ps_precioVenta');
    var btn_dv_agregar = $('#btn_dv_agregar');
    var tbl_sp_Ventas = $('#tbl_sp_Ventas');
    var dataDetVenta = { Data: [] };


    var btnSaveVenta = $('#btnSaveVenta');
    /*   */

    //var $txtModalTalla = $('#txtModalTalla');
    //var $txtModalPrecio = $('#txtModalPrecio');
    //var $txtModalCodigoAlmacen = $('#txtModalCodigoAlmacen');
    //var $btnSaveVenta = $('#btnSaveVenta');
    //var $txtModalTallaVendida = $('#txtModalTallaVendida');
    //var $txtModalCantidad = $('#txtModalCantidad');

    //var $btnAgregarTalla = $('#btnAgregarTalla');
    //var $tblListadoTallas = $('#tblListadoTallas');
    //var $cboModalTipoVenta = $('#cboModalTipoVenta');
    //var $cboModalEstado = $('#cboModalEstado');

    var $btnGenerarExcel = $('#btnGenerarExcel');
    var $txtFechaDesde = $('#txtFechaDesde');
    var $txtFechaHasta = $('#txtFechaHasta');
    //var $txtModalPrecioMayor = $('#txtModalPrecioMayor');

    var Message = {
        ObtenerTipoBusqueda: "Obteniendo los tipos de busqueda, Por favor espere...",
        GuardarSuccess: "Los datos se guardaron satisfactoriamente",
    }


    var Global = {
        IdVenta: null
    }

    //// Constructor
    //$(Initialize);

    //// Implementacion del constructor
    //function Initialize() {


    //    btnBuscar.click(btnBuscar_click);
    //    $btnNuevaVenta.click($btnNuevaVenta_click);
    //    btn_dv_agregar.click(btn_dv_agregar_click);
    //    btnSaveVenta.click(btnSaveVenta_click);

    //    // Venta en Sucursales
    //    /* app.Event.Number(txt_ps_stock_min);
    //     app.Event.Number(txt_ps_stock_prod);
    //     app.Event.Number(txt_ps_stock_max);
    //     app.Event.ForceDecimalOnly(txt_ps_pre_uni);
    //     app.Event.ForceDecimalOnly(txt_ps_pre_pro);
    //     app.Event.Blur(txt_ps_pre_uni, "N");
    //     app.Event.Blur(txt_ps_pre_pro, "N"); */


    //    LoadInicial(true);
    //    Excel();
    //    GetVenta();

    //    cbo_ps_sucursal.change(cbo_ps_sucursal_change);

    //    //$btnAgregarTalla.click($btnAgregarTalla_click);

    //    //app.Event.ForceNumericOnly($txtModalCodigo);
    //    //app.Event.Number($txtModalTalla);
    //    //app.Event.Number($txtCodigo);
    //    //app.Event.Number($txtModalCantidad); 

    //    app.Event.Number(txt_ps_cantidad);

    //    txt_ps_cantidad.change(function () {
    //        if (txt_ps_cantidad.val() != "") {
    //            var pu = parseFloat(txt_ps_unitario.val());
    //            var ca = parseInt(txt_ps_cantidad.val());
    //            var calculo = (ca * pu).toFixed(2);
    //            if (calculo == "NaN") {
    //                txt_ps_precioVenta.val('');
    //            } else {
    //                txt_ps_precioVenta.val(calculo);
    //            }
    //        } else {
    //            txt_ps_precioVenta.val('');
    //        }

    //    });
    //};

    function Excel() {
        $btnGenerarExcel.click($btnGenerarExcel_click);
        $txtFechaDesde.change(ValidarGenerarExcel);
        $txtFechaHasta.change(ValidarGenerarExcel);
        var date = new Date();
        var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        $txtFechaHasta.datepicker({
            endDate: "today",
            todayHighlight: true
        }).datepicker('setDate', today);
        $txtFechaDesde.datepicker({
            endDate: "today",
            todayHighlight: true
        });

        txtFechaEmision.datepicker({
            endDate: "today",
            todayHighlight: true
        }); //.datepicker('setDate', today);

    }

    function LoadInicial(flag) {

        var method = "GET";
        var url = "Venta/GetTipoVenta";
        var data = {};
        var fnDoneCallback = function (data) {
            if (flag) {
                app.FillComboBox(cboTipoVenta, data, parentBusqueda, null);
            } else {
                app.FillComboBox(cbo_p_tipoVenta, data, parentModal, null);
            }
        }
        app.CallAjax(method, url, data, fnDoneCallback, null, null, null);

        var url2 = "Venta/GetCliente";
        var fnDoneCallback2 = function (data) {
            if (flag) {
                app.FillComboBox(cboCliente, data, parentBusqueda, null);
            } else {
                app.FillComboBox(cbo_p_cliente, data, parentModal, null);
            }
        }
        app.CallAjax(method, url2, data, fnDoneCallback2, null, null, null);
        if (!flag) {

            var url5 = "Venta/GetProductoSucursal";
            var fnDoneCallback5 = function (data) {
                app.FillComboBox(cbo_ps_sucursal, data, parentModal, null);
            }
            app.CallAjax(method, url5, data, fnDoneCallback5, null, null, null);

        }

    }

    function cbo_ps_sucursal_change() {
        var value = $(this).val();

        if (value == "" || value == null || value == "0") {
            txt_ps_stockactual.val("");
            txt_ps_cantidad.val("");
            txt_ps_unitario.val("");
            txt_ps_precioVenta.val("");
        } else {
            var text = $(this).find(':selected').text();
            var split = app.ToSplit(text, "-");

            txt_ps_stockactual.val(split[2]);
            txt_ps_unitario.val(split[3]);
            txt_ps_precioVenta.val("");
            txt_ps_cantidad.val("");
        }
    }

    function $btnNuevaVenta_click() {
        Global.IdVenta = null;
        modalVentas.modal();
        titleModalVenta.html("Registrar Venta");
        formModal[0].reset();

        setTimeout(function () {
            LoadInicial(false);
        }, 300);

        // limpiando Venta sucursal 
        dataVentaDet = { Data: [] };
        LoadVentasSucursales(dataVentaDet);

    }


    function btn_dv_agregar_click() {

        if (cbo_ps_sucursal.val() == '' || cbo_ps_sucursal.val() == null || cbo_ps_sucursal.val() == "0") {
            app.Message.Info("Aviso", "Ingrese la Sucursal", "Aceptar", null);
            return false;
        }

        if (txt_ps_cantidad.val() == '' || txt_ps_cantidad.val() == null) {
            app.Message.Info("Aviso", "Ingrese el Cantidad", "Aceptar", null);
            return false;
        }

        if (txt_ps_unitario.val() == '' || txt_ps_unitario.val() == null) {
            app.Message.Info("Aviso", "Ingrese el Precio Unitario", "Aceptar", null);
            return false;
        }

        if (txt_ps_precioVenta.val() == '' || txt_ps_precioVenta.val() == null) {
            app.Message.Info("Aviso", "Ingrese el Precio Venta", "Aceptar", null);
            return false;
        }

        var detVet = [];
        dataDetVenta.Data.map(function (v, i) {
            detVet.push(v);
        });



        // validacion para que no se repirta la sucursal 
        var sucursal = cbo_ps_sucursal.val();
        var repetido = isAnyValueIn(sucursal, detVet, "IdProductoSucursal");
        if (repetido) {
            app.Message.Info("Aviso", "No se puede ingresar el mismo producto de la sucursal", "Aceptar", null);
            return false;
        }

        var text = cbo_ps_sucursal.find(':selected').text();
        var split = app.ToSplit(text, "-");


        var obj = {
            "Nro": (detVet.length + 1),
            "IdVentaDetalle": 0,
            "IdProductoSucursal": cbo_ps_sucursal.val(),
            "Producto": split[0] + "-" + split[1],
            "Cantidad": txt_ps_cantidad.val(),
            "PrecioUnitario": txt_ps_unitario.val(),
            "Descuento": 0,
            "PrecioVenta": txt_ps_precioVenta.val()
        };

        dataDetVenta.Data.push(obj);

        LoadVentasSucursales(dataDetVenta);

        cbo_ps_sucursal.val("0").trigger('change');
        txt_ps_stockactual.val("");
        txt_ps_cantidad.val("");
        txt_ps_unitario.val("");
        txt_ps_precioVenta.val("");

        return false;
    }

    function LoadVentasSucursales(data) {
        var columns = [
            { data: "Nro" },
            { data: "Producto" },
            { data: "Cantidad" },
            { data: "PrecioUnitario" },
            { data: "PrecioVenta" },
            { data: "IdProductoSucursal" },
        ];
        var columnDefs = [
            {
                "targets": [5],
                "visible": true,
                "className": "text-center",
                'render': function (data, type, full, meta) {
                    return "<center>" +
                        '<a class="btn btn-default btn-xs"  title="Eliminar" href="javascript:Venta.EliminarDetalleVenta(' + meta.row + ')"><i class="fa fa-trash" aria-hidden="true"></i></a>' +
                        "</center> ";
                }
            }
        ];
        var filtros = {
            pageLength: 5
        };


        app.FillDataTable(tbl_sp_Ventas, data, columns, columnDefs, "#tbl_sp_Ventas", filtros);

    }


    function isAnyValueIn(target, values, obj) {
        for (var i = 0; i < values.length; i++) {
            var valor = values[i][obj];
            if (target.indexOf(valor) > -1) {
                return true;
            }
        }
        return false;
    }

    function LoadVentasDetalle(data) {
        /*   var columns = [
               { data: "Nro" },
               { data: "NombreSucursal" },
               { data: "StockActual" },
               { data: "PrecioUni" },
               { data: "PrecioProm" },
               { data: "StockMin_Max" },
               { data: "Nro" },
   
           ];
           var columnDefs = [
               {
                   "targets": [6],
                   "visible": true,
                   "className": "text-center",
                   'render': function (data, type, full, meta) {
                       return "<center>" +
                           '<a class="btn btn-default btn-xs"  title="Eliminar" href="javascript:Venta.EliminarVentasSucursales(' + meta.row + ')"><i class="fa fa-trash" aria-hidden="true"></i></a>' +
                           "</center> ";
                   }
               }
           ];
           var filtros = {
               pageLength: 5
           };
           var drawCallback = function (settings) {
           }
   
           app.FillDataTableFiltros(tbl_sp_Ventas, data, columns, columnDefs, "#tbl_sp_Ventas", filtros, null, drawCallback);
   
           tbl_sp_Ventas.on('click', 'tr', function () {
   
               if ($(this).hasClass('selected')) {
                   $(this).removeClass('selected');
                   txt_rm_stock_actual.val('');
                   dataRegMov = { Data: [] };
                   LoadRegistrarMovimiento(dataRegMov);
               }
               else {
                   tbl_sp_Ventas.$('tr.selected').removeClass('selected');
                   $(this).addClass('selected');
                   setTimeout(function () {
                       var rowSelect = app.GetDataOfDataTable(tbl_sp_Ventas);
                       if (rowSelect !== null) {
                           txt_rm_stock_actual.val(rowSelect.StockActual);
                           hdd_VentaSucursal.val(rowSelect.IdVentaSucursal);
                           FillTableStockMovimiento(rowSelect.IdVentaSucursal);
                       }
   
                   }, 200);
               }
           });*/
    }

    function EliminarDetalleVenta(row) {
        var data = app.GetValueRowCellOfDataTable(tbl_sp_Ventas, row);

        var detVet = [];
        dataDetVenta.Data.map(function (v, i) {
            detVet.push(v);
        });

        var index = $.inArray(data, detVet);
        detVet.splice(index, 1);

        dataDetVenta = { Data: [] };
        $.each(detVet, function (index, value) {
            var obj = {
                "Nro": (index + 1),
                "IdVentaDetalle": value.IdVentaDetalle,
                "IdProductoSucursal": value.IdProductoSucursal,
                "Producto": value.Producto,
                "Cantidad": value.Cantidad,
                "PrecioUnitario": value.PrecioUnitario,
                "Descuento": value.Descuento,
                "PrecioVenta": value.PrecioVenta
            };
            dataDetVenta.Data.push(obj);
        });

        LoadVentasSucursales(dataDetVenta);
    }

    function btnSaveVenta_click() {
        if (Validar()) {
            InsertUpdateVenta();
        }
    }

    function Validar() {
        var flag = true;
        var br = "<br>"
        var msg = "";

        msg += app.ValidarCampo(cbo_p_cliente.val(), "• Seleccione un Cliente.");
        msg += app.ValidarCampo(txtFechaEmision.val(), "• El Fecha Emision.");
        msg += app.ValidarCampo(cbo_p_tipoVenta.val(), "• Seleccione Tipo de Venta.");

        if (dataDetVenta.Data.length == 0) {
            msg += "• Ingrese al menos una venta.";
        }


        if (msg != "") {
            flag = false;
            var msgTotal = "Por favor, Ingrese los siguientes campos de la Venta: " + br + msg;
            app.Message.Info("Aviso", msgTotal);
        }

        return flag;
    }

    function InsertUpdateVenta() {

        // registro venta
        var ventDet = [];
        dataDetVenta.Data.map(function (value, i) {
            var obj = {
                "IdVentaDetalle": value.IdVentaDetalle,
                "IdProductoSucursal": value.IdProductoSucursal,
                "Cantidad": value.Cantidad,
                "PrecioUnitario": value.PrecioUnitario,
                "Descuento": value.Descuento,
                "PrecioVenta": value.PrecioVenta,
            };
            ventDet.push(obj);
        });

        var cbo_p_cliente = $('#cbo_p_cliente');
        var cbo_p_tipoVenta = $('#cbo_p_tipoVenta');
        var txt_p_observacion = $('#txt_p_observacion');
        var txtFechaEmision = $('#txtFechaEmision');


        var obj = {
            "IdVenta": Global.IdVenta,
            "IdCliente": cbo_p_cliente.val(),
            "TipoVenta": cbo_p_tipoVenta.find(':selected').text(),
            "Observacion": txt_p_observacion.val(),
            "FechaVenta": app.ConvertDatetimeToInt(txtFechaEmision.val()),
            // resumen del importe total
            "SubTotal": 0,
            "ValorVenta": 0,
            "Descuento": 0,
            "IGV": 0,
            "Total": 0,
            "ventDet": ventDet,
            //"Precio_Prod_Mayor": app.UnformatNumber($txtModalPrecioMayor.val()), 
        };
        var method = "POST";
        var url = "Venta/InsertUpdateVenta";
        var data = obj;
        var fnDoneCallback = function (data) {
            app.Message.Success("Grabar", Message.GuardarSuccess, "Aceptar", null);
            GetVenta();
            modalVentas.modal('hide');
            dataDetVenta = { Data: [] };
        }
        app.CallAjax(method, url, data, fnDoneCallback, null, null, null);

    }

    function btnBuscar_click() {
        GetVenta();
    }

    function GetVenta() {

        var parms = {
            "TipoVenta": cboTipoVenta.find(':selected').text(),
            "Cliente": cboCliente.find(':selected').text(),
            "IdVenta": txt_numComprobante.val(),
            "FechaVenta": app.ConvertDatetimeToInt(txt_fecha_registro.val(), '/')
        }

        var url = "Venta/GetVentas";
        var method = 'GET';
        var data = parms;
        var fnDoneCallback = function (data) {
            console.log(data.Data);
            var columns = [
                { data: "IdVenta" },
                { data: "TipoVenta" },
                { data: "Cliente" },
                { data: "Observacion" },
                { data: "FechaVenta" },
                { data: "SubTotal" },
                { data: "IGV" },
                { data: "Total" }
            ];
            var columnDefs = [

                {
                    "targets": [4],
                    "visible": true,
                    "orderable": false,
                    "className": "text-center",
                    'render': function (data, type, full, meta) {

                        return app.ConvertIntToDatetimeDT(data);

                    }
                },

            ];
            app.FillDataTable(tblListadoVentas, data, columns, columnDefs, '#tblListadoVentas');

        };
        app.CallAjax(method, url, data, fnDoneCallback);

        txt_fecha_registro.datepicker({
            endDate: "today",
            todayHighlight: true
        }); //.datepicker('setDate', today);

    }

    function EditarVenta(row) {
        modalVenta.modal();
        formModal[0].reset();

        if (cboTipoVenta.val() == null) {
            setTimeout(function () {
                LoadInicial(false);
            }, 600);
        }

        var data = app.GetValueRowCellOfDataTable(tblListadoVentas, row);
        titleModalVenta.html("Editar Venta");
        Global.IdVenta = data.IdVenta;

        /*  txt_p_nombre.val(data.Nombre);
          txt_p_descripcion.val(data.Descripcion);
          txt_p_codigo.val(data.Codigo);
          txt_p_abreviatura.val(data.Abreviatura);
          txt_p_codigoBarra.val(data.CodeBar);
  
  
          setTimeout(function () {
              cbo_p_categoria.val(data.Categoria.IdCategoria).trigger('change');
              cbo_p_marca.val(data.Marca.IdMarca).trigger('change');
              cbo_p_uniMedida.val(data.UnidadMedida.IdUnidadMedida).trigger('change');
          }, 2000);*/

        //app.Event.Disabled($txtModalCodigo);
        //app.Event.Enable($cboModalEstado);

        //   FillTableVentaSucursal();

        // limpiando stock movimiento 
        dataRegMov = { Data: [] };
        //  LoadRegistrarMovimiento(dataRegMov);

        // cbo_rm_tipoM.val(0).trigger('change');

        //  txt_rm_stock_actual.val("");


    }
    /*
        function FillTableVentaSucursal() {
            dataVentaDet = { Data: [] };
    
            var obj = {
                "IdVenta": Global.IdVenta
            }
    
            var method = "POST";
            var url = "Venta/GetVentaSucursal";
            var data = obj;
            var fnDoneCallback = function (data) {
    
                $.each(data.Data, function (index, value) {
                    var obj = {
                        "Nro": index + 1,
                        "IdSucursal": value.IdSucursal,
                        "NombreSucursal": value.NombreSucursal,
                        "StockActual": value.StockActual,
                        "StockMin": value.StockMinimo,
                        "StockMax": value.StockMaximo,
                        "PrecioUni": value.PrecioUnitario,
                        "PrecioProm": value.PrecioPromedio,
                        "StockMin_Max": value.StockMinimo + "/" + value.StockMaximo,
                        "IdVentaSucursal": value.IdVentaSucursal
                    };
                    dataVentaDet.Data.push(obj);
                });
    
                LoadVentasSucursales(dataVentaDet);
            }
            app.CallAjax(method, url, data, fnDoneCallback);
        }
    
        function FillTableStockMovimiento(data) {
            dataRegMov = { Data: [] };
            var obj = {
                "IdVentaSucursal": data
            };
    
            var method = "POST";
            var url = "Venta/GetStockMovimiento";
            var data = obj;
            var fnDoneCallback = function (data) {
                $.each(data.Data, function (index, value) {
                    var obj = {
                        "Nro": (index + 1),
                        "IdStockMovimiento": value.IdStockMovimiento,
                        "IdVentaSucursal": value.IdVentaSucursal,
                        "IdTipoMovimiento": (index + 1),
                        "NombreTipoMovimiento": value.TipoMovimiento,
                        "StockActual": value.StockAntiguo,
                        "StockMod": value.StockAniadadio,
                    };
                    dataRegMov.Data.push(obj);
                });
                LoadRegistrarMovimiento(dataRegMov);
            }
            app.CallAjax(method, url, data, fnDoneCallback);
        }
    
        function EliminarVenta(row) {
            var fnAceptarCallback = function () {
                var data = app.GetValueRowCellOfDataTable(tblListadoVentas, row);
    
                var obj = {
                    "IdVenta": data.IdVenta,
                    "Estado": 1
                }
                var method = "POST";
                var url = "Venta/DeleteVenta";
                var data = obj;
                var fnDoneCallback = function (data) {
                    GetVenta();
                };
                app.CallAjax(method, url, data, fnDoneCallback, null, null, null);
            }
            app.Message.Confirm("Aviso", "Esta seguro que desea eliminar el Venta?", "Aceptar", "Cancelar", fnAceptarCallback, null);
        }
        */

    //-------------------------------------------------------------------------


    function $btnGenerarExcel_click() {
        var FechaDesde = app.ConvertDatetimeToInt($txtFechaDesde.val(), '/');
        var FechaHasta = app.ConvertDatetimeToInt($txtFechaHasta.val(), '/');

        if (FechaDesde !== "" && FechaHasta !== "") {
            GenerarExcel();
        } else if (FechaDesde === "") {
            app.Message.Info("Aviso", "Falta ingresar la Fecha Desde", "Aceptar", null);
        }

    }

    function GenerarExcel() {

        /*  var data = {
              "Categoria": {
                  "IdCategoria": cboCategoria.val()
              },
              "Nombre": txt_nombre.val(),
              "Marca": {
                  "IdMarca": cboMarca.val()
              },
              "VentaSucursal": {
                  "IdSucursal": cboSucursal.val()
              },
              "FechaRegistro": app.ConvertDatetimeToInt(txt_fecha_registro.val(), '/'),
              "FechaDesde": app.ConvertDatetimeToInt($txtFechaDesde.val(), '/'),
              "FechaHasta": app.ConvertDatetimeToInt($txtFechaHasta.val(), '/')
          }
          var url = "Venta/GetAllVentas";
          var fnDoneCallback = function (data) {
              if (data.InternalStatus == 1 && data.Data.length > 0) {
                  app.RedirectTo("Venta/GenerarExcel");
              } else {
                  app.Message.Info("Aviso", "No hay Ventas con esas fechas", "Aceptar");
              }
          }
          app.CallAjax("POST", url, data, fnDoneCallback);*/
    }

    function ValidarGenerarExcel() {
        var FechaDesde = app.ConvertDatetimeToInt($txtFechaDesde.val(), '/');
        var FechaHasta = app.ConvertDatetimeToInt($txtFechaHasta.val(), '/');

        if (FechaDesde > FechaHasta) {
            $txtFechaDesde.val("");
        }
    }


    return {
        EditarVenta: EditarVenta,
        EliminarDetalleVenta: EliminarDetalleVenta

    }


})(window.jQuery, window, document);