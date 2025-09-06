import './style/App.css'
import Avatar from "./component/avatar/Avatar.tsx";
import {Accordion, AccordionItem, Card, CardBody, ScrollShadow} from "@heroui/react";
import AvatarClothing from "./component/avatar/AvatarClothing.tsx";

function App() {
    const head = [
        "/PNG/Hair/Black/blackMan1.png",
        "/PNG/Hair/Black/blackMan2.png",
        "/PNG/Hair/Black/blackMan3.png",
        "/PNG/Hair/Black/blackMan4.png",
        "/PNG/Hair/Black/blackMan5.png",
        "/PNG/Hair/Black/blackMan6.png",
    ]
    const clothing = [
        {
            shirt: "/PNG/Shirts/Blue/blueShirt1.png",
            shirtArm: "/PNG/Shirts/Blue/blueArm_long.png",
        },
        {
            shirt: "/PNG/Shirts/Blue/blueShirt2.png",
            shirtArm: "/PNG/Shirts/Blue/blueArm_long.png",
        },
        {
            shirt: "/PNG/Shirts/Blue/blueShirt3.png",
            shirtArm: "/PNG/Shirts/Blue/blueArm_long.png",
        }
    ]
    const shoe = [
        "/PNG/Shoes/Black/blackShoe1.png",
        "/PNG/Shoes/Black/blackShoe2.png",
        "/PNG/Shoes/Black/blackShoe3.png",
        "/PNG/Shoes/Black/blackShoe4.png",
        "/PNG/Shoes/Black/blackShoe5.png",
    ]

    return (
        <>
            <div className='flex justify-center'>
                <div className='flex items-center justify-center w-100 pr-40'>
                    <Avatar/>
                </div>
                <Card>
                    <CardBody>
                        <ScrollShadow hideScrollBar className='pl-4 w-120 h-200 overflow-y-auto overscroll-y-auto'>
                            <Accordion selectionMode="multiple">
                                <AccordionItem key="1" aria-label="head" title="头发">
                                    <div className='flex items-center flex-wrap'>
                                        {head.map((item) => (
                                            <div className='min-w-1/2 flex justify-center'>
                                                <img src={item} className='scale-50'/>
                                            </div>
                                        ))}
                                    </div>
                                </AccordionItem>
                                <AccordionItem key="2" aria-label="clothing" title="衣服">
                                    <div className='flex items-center flex-wrap '>
                                        {clothing.map((item) => (
                                            <div className='min-w-1/2 flex justify-center p-1'>
                                                <AvatarClothing shirt={item.shirt}
                                                                shirtArm={item.shirtArm}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </AccordionItem>
                                <AccordionItem key="3" aria-label="shoe" title="鞋子">
                                    <div className='flex items-center flex-wrap'>
                                        {shoe.map((item) => (
                                            <div className='min-w-1/2 flex justify-center p-1 pt-2 pb-2'>
                                                <img src={item} className='scale-50'/>
                                            </div>
                                        ))}
                                    </div>
                                </AccordionItem>
                                <AccordionItem key="4" aria-label="scene" title="场景">
                                    场景
                                </AccordionItem>
                            </Accordion>
                        </ScrollShadow>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default App
