import React from "react";
import GitHup from "./GitHup";
import Block from "dxc-flex";
import Main from "./Main/Main";
import qqShare from "qq-share";
qqShare({
  title: "身份证盗用所造成的损失，你想象不到！",
  desc: "这是一款最安全，最快速的纯前端图片加水印，拒绝上传保证个人信息安全。",
  imgUrl: "https://oss.tuobacco.com/wop2/2018-06-01/5b10dde28a12d.jpg"
});
export default class IndexPage extends React.Component {
  render() {
    return (
      <div style={{ padding: "30px 15px" }}>
        <Block vertical="center" horizontal="center" style={{ fontWeight: 500, fontSize: "18px" }}>
          <div>纯前端canvas加水印，开源代码</div>
          <GitHup />
        </Block>
        <Main />
      </div>
    );
  }
}
