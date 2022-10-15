let data = ["", "", "", "", ""];

function goChu(){
    document.getElementById("data-input").value = "";
    let type_code = "Đau nhức khớp ngón chân, mỏi đầu gối";
    let index = 0;
    const run = setInterval(function(){
        document.getElementById("data-input").value += type_code[index];
        index++;
        if (index == type_code.length){
            clearInterval(run);
        }
    }, 70);
}

let current = 0;
var content = [
    `<div class="symptom" style="margin-top:60px;padding: 10px;">
    <div class="symptom__container bd-grid">
        <div class="symptom__data">
            <h2 class="symptom__title" style="margin-bottom: 20px;" ><b> Triệu chứng:</b></h2>
            <a onclick="change_visible(5)">
                <div class="box" style="width:100%; padding: 10px 20px; border: 1px solid rgb(75, 60, 160); background-color: hsl(174, 63%, 40%); color: white;border-radius: 7px; margin-bottom: 10px; font-size: 18px;">
                    <h1 style="margin:2px">Xúc giác</h1>
                    <p> </p>
                </div>
            </a>
            <a onclick="change_visible(4)">
                <div class="box" style="width:100%; padding: 10px 20px; border: 1px solid rgb(75, 60, 160); background-color: hsl(174, 63%, 40%); color: white;border-radius: 7px; margin-bottom: 10px; font-size: 18px;">
                    <h1 style="margin:2px">Thị lực</h1>
                    <p> </p>
                </div>
            </a>
            <a onclick="change_visible(2)">
                <div class="box" style="width:100%; padding: 10px 20px; border: 1px solid rgb(75, 60, 160); background-color: hsl(174, 63%, 40%); color: white;border-radius: 7px; margin-bottom: 10px; font-size: 18px;">
                    <h1 style="margin:2px">Mất ngủ</h1>
                    <p> </p>
                </div>
            </a>
            <a onclick="change_visible(3)">
                <div class="box" style="width:100%; padding: 10px 20px; border: 1px solid rgb(75, 60, 160); background-color: hsl(174, 63%, 40%); color: white;border-radius: 7px; margin-bottom: 10px; font-size: 18px;">
                    <h1 style="margin:2px">Mệt mỏi</h1>
                    <p> </p>
                </div>
            </a>
            <a onclick="change_visible(1)">
                <div class="box" style="width:100%; padding: 10px 20px; border: 1px solid rgb(75, 60, 160); background-color: hsl(174, 63%, 40%); color: white;border-radius: 7px; margin-bottom: 10px; font-size: 18px;">
                    <h1 style="margin:2px">Chán ăn</h1>
                    <p> </p>
                </div>
            </a>
        </div>
        <button onclick="chan_doan()" style="width: 100%; margin-top: 20px; background-color: rgb(9, 35, 180); padding: 10px; border-radius: 10px; font-size: 18px; color: white;">
            Tiến hành chẩn đoán
        </button>
    </div>
    <p style="margin-top: 20px;">
        <b style="font-size: 18px;">
            Lưu ý 
        </b>
        <br>
        <span style="margin-left: 20px;">Tìm biến chứng</span>, biến chứng đấy phải có văn bản chẩn đoán của bộ y tế, hoặc FDA, WHO về triệu chứng lâm sàng, rồi dựa vào triệu chứng lâm sàng 
    </p>
</div>`,
    `<div class="container " style="margin-top: 70px; margin-left: 10px; margin-right: 10px;">
<p style="text-align: center; font-size: 18px; font-weight: bold">
    GHI LẠI TRIỆU CHỨNG VỀ CHÁN ĂN
</p>
<a onclick="change_visible(0)"><<< Trở về</a> 
<br>
<h1 style="margin-bottom: 10px; float: left; margin-right: 10px;"><b>Ghi lại triệu chứng: </b></h1>
<input type="text" id="data-input" style="width:100%; border: 1px solid rgb(75, 60, 160); border-radius: 7px;margin-bottom: 20px; padding: 20px 10px;">
<input type="submit" onclick="change_visible(0)" style="width: 100%; padding: 10px; border-radius: 5px; color: rgb(255, 255, 255); background-color: rgb(56, 89, 180);">

<p style="margin-top: 20px;">
    <b style="font-size: 18px;">
        Lưu ý 
    </b>
    <br>
    <span style="margin-left: 20px;">Người dùng cần ghi chép các triệu chứng một cách chân thực nhất. Bởi vì:</span>
    <br>
    <span style="margin-left: 20px;">Tìm biến chứng</span>, biến chứng đấy phải có văn bản chẩn đoán của bộ y tế, hoặc FDA, WHO về triệu chứng lâm sàng, rồi dựa vào triệu chứng lâm sàng 
    <br>
    <span style="margin-left: 20px;">=></span> 
    đặt ra bộ câu hỏi cho người dùng và dựa vào câu trả lời của người dùng để chẩn đoán về biến chứng gặp phải
</p>

</div>`,
    `<div class="container " style="margin-top: 70px; margin-left: 10px; margin-right: 10px;">
<p style="text-align: center; font-size: 18px; font-weight: bold">
    GHI LẠI TRIỆU CHỨNG VỀ MẤT NGỦ
</p>
<a onclick="change_visible(0)"><<< Trở về</a> 
<br>
<h1 style="margin-bottom: 10px; float: left; margin-right: 10px;"><b>Ghi lại triệu chứng: </b></h1>
<input type="text" id="data-input" style="width:100%; border: 1px solid rgb(75, 60, 160); border-radius: 7px;margin-bottom: 20px; padding: 20px 10px;">
<input type="submit" onclick="change_visible(0)" style="width: 100%; padding: 10px; border-radius: 5px; color: rgb(255, 255, 255); background-color: rgb(56, 89, 180);">

<p style="margin-top: 20px;">
    <b style="font-size: 18px;">
        Lưu ý 
    </b>
    <br>
    <span style="margin-left: 20px;">Người dùng cần ghi chép các triệu chứng một cách chân thực nhất. Bởi vì:</span>
    <br>
    <span style="margin-left: 20px;">Tìm biến chứng</span>, biến chứng đấy phải có văn bản chẩn đoán của bộ y tế, hoặc FDA, WHO về triệu chứng lâm sàng, rồi dựa vào triệu chứng lâm sàng 
    <br>
    <span style="margin-left: 20px;">=></span> 
    đặt ra bộ câu hỏi cho người dùng và dựa vào câu trả lời của người dùng để chẩn đoán về biến chứng gặp phải
</p>

</div>`,
    `<div class="container " style="margin-top: 70px; margin-left: 10px; margin-right: 10px;">
<p style="text-align: center; font-size: 18px; font-weight: bold">
    GHI LẠI TRIỆU CHỨNG VỀ CƠ THỂ
</p>
<a onclick="change_visible(0)"><<< Trở về</a> 
<br>
<h1 style="margin-bottom: 10px; float: left; margin-right: 10px;"><b>Ghi lại triệu chứng (mệt mỏi, chán ăn,...): </b></h1>
<input type="text" id="data-input" style="width:100%; border: 1px solid rgb(75, 60, 160); border-radius: 7px;margin-bottom: 20px; padding: 20px 10px;">
<input type="submit" onclick="change_visible(0)" style="width: 100%; padding: 10px; border-radius: 5px; color: rgb(255, 255, 255); background-color: rgb(56, 89, 180);">

<p style="margin-top: 20px;">
    <b style="font-size: 18px;">
        Lưu ý 
    </b>
    <br>
    <span style="margin-left: 20px;">Người dùng cần ghi chép các triệu chứng một cách chân thực nhất. Bởi vì:</span>
    <br>
    <span style="margin-left: 20px;">Tìm biến chứng</span>, biến chứng đấy phải có văn bản chẩn đoán của bộ y tế, hoặc FDA, WHO về triệu chứng lâm sàng, rồi dựa vào triệu chứng lâm sàng 
    <br>
    <span style="margin-left: 20px;">=></span> 
    đặt ra bộ câu hỏi cho người dùng và dựa vào câu trả lời của người dùng để chẩn đoán về biến chứng gặp phải
</p>

</div>`,
    `<div class="container " style="margin-top: 70px; margin-left: 10px; margin-right: 10px;">
<p style="text-align: center; font-size: 18px; font-weight: bold">
    GHI LẠI TRIỆU CHỨNG VỀ THỊ LỰC
</p>
<a onclick="change_visible(0)"><<< Trở về</a> 
<br>
<h1 style="margin-bottom: 20px; float: left; margin-right: 10px;"><b> Thị lực: </b></h1>
<div class="text" style="color: rgb(59, 45, 146);">
    <select name="" id="" style="width: 200px;">
        <option value="1">không</option>
        <option value="2">Một chút</option>
        <option value="3">Nhiều</option>
        <option value="4">Rất nhiều</option>
    </select>
</div>
<h1 style="margin-bottom: 5px;margin-top: 20px;" ><b> Mô tả:</b></h1>
<input type="text" id="data-input" style="width:100%; border: 1px solid rgb(75, 60, 160); border-radius: 7px;margin-bottom: 20px; padding: 20px 10px;">
<input type="submit" onclick="change_visible(0)" style="width: 100%; padding: 10px; border-radius: 5px; color: rgb(255, 255, 255); background-color: rgb(56, 89, 180);">

<p style="margin-top: 20px;">
    <b style="font-size: 18px;">
        Lưu ý 
    </b>
    <br>
    <span style="margin-left: 20px;">Người dùng cần ghi chép các triệu chứng một cách chân thực nhất. Bởi vì:</span>
    <br>
    <span style="margin-left: 20px;">Tìm biến chứng</span>, biến chứng đấy phải có văn bản chẩn đoán của bộ y tế, hoặc FDA, WHO về triệu chứng lâm sàng, rồi dựa vào triệu chứng lâm sàng 
    <br>
    <span style="margin-left: 20px;">=></span> 
    đặt ra bộ câu hỏi cho người dùng và dựa vào câu trả lời của người dùng để chẩn đoán về biến chứng gặp phải
</p>

</div>`,
    `<div class="container " style="margin-top: 70px; margin-left: 10px; margin-right: 10px;">
<p style="text-align: center; font-size: 18px; font-weight: bold">
    GHI LẠI TRIỆU CHỨNG VỀ XÚC GIÁC
</p>
<a onclick="change_visible(0)"><<< Trở về</a> 
<br>
<h1 style="margin-bottom: 20px; float: left; margin-right: 10px;"><b> Bàn chân: </b></h1>
<div class="text" style="color: rgb(59, 45, 146);">
    <select name="" id="" style="width: 200px;">
        <option value="1">Đau</option>
        <option value="2">Tê</option>
        <option value="3">Nóng</option>
        <option value="4">Không cảm giác</option>
    </select>
</div>
<h1 style="margin-bottom: 5px;margin-top: 20px;" ><b> Mô tả:</b></h1>
<input type="text" id="data-input" style="width:100%; border: 1px solid rgb(75, 60, 160); border-radius: 7px;margin-bottom: 20px; padding: 20px 10px;">
<input type="submit" onclick="change_visible(0)" style="width: 100%; padding: 10px; border-radius: 5px; color: rgb(255, 255, 255); background-color: rgb(56, 89, 180);">

<p style="margin-top: 20px;">
    <b style="font-size: 18px;">
        Lưu ý 
    </b>
    <br>
    <span style="margin-left: 20px;">Người dùng cần ghi chép các triệu chứng một cách chân thực nhất. Bởi vì:</span>
    <br>
    <span style="margin-left: 20px;">Tìm biến chứng</span>, biến chứng đấy phải có văn bản chẩn đoán của bộ y tế, hoặc FDA, WHO về triệu chứng lâm sàng, rồi dựa vào triệu chứng lâm sàng 
    <br>
    <span style="margin-left: 20px;">=></span> 
    đặt ra bộ câu hỏi cho người dùng và dựa vào câu trả lời của người dùng để chẩn đoán về biến chứng gặp phải
</p>

</div>`
]

const root = document.getElementById('root');

function change_visible(index){
    if (index == 0){
        data[current - 1] = document.getElementById("data-input").value;
        current = index;
        root.innerHTML = content[current];
    }else{
        current = index;
        root.innerHTML = content[current];
        if(data[current - 1] != ""){
            document.getElementById("data-input").value =  data[current - 1] + "";
        }
        if (current == 5){
            goChu();
        }
    }
}

function chan_doan(){
    root.innerHTML = `
    <div class="symptom" style="margin-top:60px;padding: 10px;">
    <div class="symptom__container bd-grid">
        <div class="symptom__data">
            <h2 class="symptom__title" style="margin-bottom: 10px; font-size: 20px;" ><b> Xem xét chẩn đoán bệnh chứng:</b></h2>
            <p style="font-size: 16px;">
                Dấu hiệu xúc giác : ${data[4]}
            </p>
            <p style="font-size: 16px;">
                Dấu hiệu chán ăn : ${data[0]}
            </p>
            <p style="font-size: 16px;">
                Dấu hiệu mất ngủ : ${data[1]}
            </p>
            <p style="font-size: 16px;">
                Dấu hiệu mệt mỏi : ${data[2]}
            </p>
            <p style="font-size: 16px;">
                Dấu hiệu thị lực : ${data[3]}
            </p>
            <h2 class="symptom__title" style="margin-top: 10px; font-size: 22px;" ><b> Kết Quả:</b></h2>
            <div style="width: 100%;">
                <span style="font-size: 50px; text-align: center; display:inherit; color: red;">
                    95%
                </span>
            </div>
            <p style="font-size: 20px; text-align: center;color: brown;">    
                Nguy cơ bị bệnh gout. Bạn hãy đi khám để có kết quả chính xác hơn
            </p>
        </div>
    
    </div>
    <p style="margin-top: 20px;">
        <b style="font-size: 18px;">
            Lưu ý 
        </b>
        <br>
        <span style="margin-left: 20px;">Tìm biến chứng</span>, biến chứng đấy phải có văn bản chẩn đoán của bộ y tế, hoặc FDA, WHO về triệu chứng lâm sàng, rồi dựa vào triệu chứng lâm sàng 
    </p>
</div>
    `;
}