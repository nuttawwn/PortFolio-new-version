import swal, { SweetAlertIcon } from "sweetalert2";


export class dialogHelper {

    constructor() { }


    public confirm = function (title?: string, text?: string, callback?: any) {
        swal.fire({
            title: title,//Are you sure?
            text: text,//"You won't be able to revert this!"
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, do it!'
        }).then((result) => {
            if (result.value && callback) {

                if (callback && callback.com) { callback.com[callback.prop](); }
                else if (callback) { callback(); }
            }
        })
    }
    public confirm1 = function (title?: string, text?: string, callback?: any) {
        swal.fire({
            title: title,//Are you sure?
            text: text,//"You won't be able to revert this!"
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, do it!'
        }).then((result) => {
            if (callback) {
                callback();
            }
        })
    }

    success(title?: string, callback?: any) {
        swal.fire({
            position: 'center',
            icon: 'success',
            title: title,
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            if (callback && callback.com) { callback.com[callback.prop](); }
            else if (callback) { callback(); }
        })
    }
    successWithButton(title?: string, callback?: any) {
        swal.fire({
            position: 'center',
            icon: 'success',
            title: title,
            showConfirmButton: true
            //timer: 2300
        }).then(() => {
            if (callback && callback.com) { callback.com[callback.prop](); }
            else if (callback) { callback(); }
        })
    }
    error(text?: string, callback?: any) {
        swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: text
            //footer: '<a href>Why do I have this issue?</a>'
        }).then(() => {
            if (callback && callback.com) { callback.com[callback.prop](); }
            else if (callback) { callback(); }
        });
    }
    errorWithNewLine(text?: string,text2?: string, callback?: any) {
        swal.fire({
            icon: 'error',
            title: 'Oops...',
            html: '<h6>'+text+'</h6>'+'<h6><span style="color:red;font-weight:bold">'+text2+'</span></h6>'
            //footer: '<a href>Why do I have this issue?</a>'
        }).then(() => {
            if (callback && callback.com) { callback.com[callback.prop](); }
            else if (callback) { callback(); }
        });
    }
    // /**
    //  *
    //  * @param icon : 'success' | 'error' | 'warning' | 'info' | 'question'
    //  * @param title : string
    //  * @param text : string?
    //  * @param callback : function?
    //  */
    // show(icon: SweetAlertIcon, title: string, text?: string, callback?: any) {
    //     swal.fire({
    //         icon: icon,
    //         title: title,
    //         text: text
    //         //footer: '<a href>Why do I have this issue?</a>'
    //     }).then(() => {
    //         if (callback && callback.com) { callback.com[callback.prop](); }
    //         else if (callback) { callback(); }
    //     });
    // }
    // info(title?, text?, callback?) {
    //     swal.fire({
    //         icon: 'info',
    //         title: title,
    //         text: text
    //     }).then(() => {
    //         if (callback && callback.com) { callback.com[callback.prop](); }
    //         else if (callback) { callback(); }
    //     })
    // }
    // warning(title?, text?, callback?) {
    //     swal.fire({
    //         icon: 'warning',
    //         title: title,
    //         html: text,

    //     }).then(() => {
    //         if (callback && callback.com) { callback.com[callback.prop](); }
    //         else if (callback) { callback(); }
    //     });
    // }
    // requireWarning(title?, text?, callback?) {
    //     swal.fire({
    //         icon: 'error',
    //         title: "<h5 style='color:red'>" + title + "</h5>",
    //         html: text,
    //         // inputClass: 'text-danger'
    //     }).then(() => {
    //         if (callback && callback.com) { callback.com[callback.prop](); }
    //         else if (callback) { callback(); }
    //     });
    // }
}
