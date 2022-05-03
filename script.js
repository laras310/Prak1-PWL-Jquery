$(document).ready(function() {
    let produkDb = [
        {
            nama: "Jet Tempur",
            jumlah:20,
        },
        {
            nama:"Rudal Hipersonik",
            jumlah:10,
        },
        {
            nama:"Infinity Stone",
            jumlah:5,
        },
        {
            nama:"Nuklir Hiroshima",
            jumlah:2,
        },
    ];
    let msg = "";
    let num = 1;
    let products=["Jet Tempur","Rudal Hipersonik","Infinity Stone","Nuklir Hiroshima"];
    // hiding btn tambah
    $("#btn-tambah").hide();
    $("#produk-"+num ).change(function(){
        $("#btn-tambah").show();
    });

    // $("#btn-del-1").click(function(){
    //     console.log(num);
    // });

    //pesan produk
    $("#btn-pesan").click(function(){
        for(let i=1;i<=num;i++){
            let jumlah_idx = produkDb.findIndex((data)=>data.nama === $("#produk-"+i).val());
            if($("#jumlah-"+i).val() <= produkDb[jumlah_idx].jumlah){
                //mengurangi jumlah stok
                produkDb[jumlah_idx].jumlah-= $("#jumlah-"+i).val();

                console.log(produkDb[jumlah_idx].jumlah,$("#jumlah-"+i).val());
                //output message  
                msg+="<li>"+$("#produk-"+i).val()+" ("+$("#jumlah-"+i).val()+")</li>"
                $("#nama").html(`${$("#nama-pemesan").val()}`);
                $("#list-produk").html(`${msg}`);
            }
            else{
                alert(`Stok tidak mencukupi. Jumlah Stok ${produkDb[jumlah_idx].jumlah}`);
            }
        };  
    });

    //tambah produk
    $("#btn-tambah").click(function(){
        let jumlah_idx = produkDb.findIndex((data)=>data.nama === $("#produk-"+num).val());
        num+=1;
        let msg=`<div class="clearfix cont2"><div class="left" id="id-${num}"><label for="produk-${num}">Produk</label><br><select id="produk-${num}" required><option value="" hidden selected>Pilih produk</option>`;
        products.forEach((data) => {
            msg += `<option value="${data}">${data}</option>`;
          });
        msg += `</select><br></div><div class="left cont3"><label for="jumlah-${num}" style="padding-left: 5px;">Jumlah</label><br><input type="number" id="jumlah-${num}" class="jumlah" required><br></div>`;
        msg+=`<div class="left pd-top"><button id="btn-del-${num}" class="btn-3"><i class="fa fa-minus-circle" aria-hidden="true"></i></button></div>`
        $(this).before(msg);
        
        $("#btn-del-"+num).click(function(){
            console.log(num);
            $("#id-"+num ).nextAll().remove();
            $("#id-"+num).closest('div').remove();
        });
    });

});