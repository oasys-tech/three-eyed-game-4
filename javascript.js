// IDからオブジェクトを取得する
function $(id)
{
    return document.getElementById(id);
}

// マスを選択するアクション
function clickAction(event) {
    // イベントからクリックされたボタンのIDを取得する
    let id = event.target.id;

    // IDからオブジェクトを取得する
    let object = $(id);

    // マス目にマークを設定する
    object.value = 'o';
}

// 画面を読み込んだ時の処理
function onloadAction() {
    // ボタンにイベントを設定する
    $('b1').onclick = clickAction;
    $('b2').onclick = clickAction;
    $('b3').onclick = clickAction;
    $('b4').onclick = clickAction;
    $('b5').onclick = clickAction;
    $('b6').onclick = clickAction;
    $('b7').onclick = clickAction;
    $('b8').onclick = clickAction;
    $('b9').onclick = clickAction;
}

// 画面読み込み時のイベントを設定
window.onload = onloadAction;