import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストへ追加する関数
const createIncompleteList = (text) => {
  //liの生成
  const li = document.createElement("li");
  li.className = "list-row";

  //pタグ生成
  const p = document.createElement("p");
  p.className = "list-p";
  p.innerText = text;

  //buttonタグの生成（完了）
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親要素（li）を未完了TODOから削除
    deleteFromIncompleteList(completeButton.parentNode);
    //完了のリストに追加
    const addTarget = completeButton.parentNode;
    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    //li以下を初期化
    addTarget.textContent = null;
    //liの生成
    const p = document.createElement("p");
    p.className = "list-p";
    p.innerText = text;
    //buttonタグの生成（戻す）
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻るボタンの要素(li)を完了リストから削除
      const deletTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deletTarget);
      //テキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });
    //liタグに各要素を設定
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    //完了のリストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //buttonタグの生成（削除）
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親要素（li）を未完了TODOから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //liタグの中に各要素を設定
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
