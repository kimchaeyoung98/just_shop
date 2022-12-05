import React from 'react';
import HeaderComponent from './HeaderComponent.jsx';
import MainComponent from './MainComponent.jsx';
import FooterComponent from './FooterComponent.jsx';
import ModalComponent from './ModalComponent.jsx';

function WrapComponent() {

    // 모달 상태관리
    const [show, setShow] = React.useState(false);

    // 모달 열기 함수
    const modalOpen=()=>{
      setShow(true);
    }
  
    // 모달 닫기 함수
    const modalClose=()=>{
      setShow(false);
    }
    
  return (
    <div id="wrap">
      <HeaderComponent/>
      <MainComponent modalOpen={modalOpen}/>
      <FooterComponent/>
      {
        show && <ModalComponent modalClose={modalClose}/> 
      }
    </div>
  );
};

export default WrapComponent;