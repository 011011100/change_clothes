import './style/App.css'
import Avatar from "./component/avatar/Avatar.tsx";

function App() {

    // const pants = '/PNG/Pants/Blue 1/pantsBlue1_long.png';
    // const shoes = '/PNG/Shoes/Black/blackShoe1.png';
    // const shirtArm = '/PNG/Shirts/Blue/blueArm_long.png';
    // const shirt = '/PNG/Shirts/Blue/blueShirt1.png';
    // const hair = '/PNG/Hair/Black/blackMan1.png';
    // const face = '/PNG/Face/Completes/face1.png';
    // const head = '/PNG/Skin/Tint 1/tint1_head.png';
    // const neck = '/PNG/Skin/Tint 1/tint1_neck.png';
    // const hand = '/PNG/Skin/Tint 1/tint1_hand.png';
    // const waist = '/PNG/Pants/Blue 1/pantsBlue11.png';

    return (
    <>
        <div className="avatar-container" style={{position:'relative', width:300, height:500}}>
            <Avatar />
        </div>
    </>
  )
}

export default App
