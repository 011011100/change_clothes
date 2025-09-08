import './style/App.css'
import Avatar from "./component/avatar/Avatar.tsx";
import {Accordion, AccordionItem, Card, CardBody, Image, ScrollShadow} from "@heroui/react";
import AvatarClothing from "./component/avatar/AvatarClothing.tsx";
import {clothingOptions,} from "./store/ClothingOptions.ts";
import {useClothingOptionsStore} from "./store/ClothingOptionsState.ts";

function App() {
    const {choose, setClothing} = useClothingOptionsStore();

    return (
        <>
            <Card>
                <CardBody className='p-0'>
                    <div className='flex items-center justify-center'>
                        <div
                            className='flex items-center justify-center w-150 h-200 inset-shadow-sm inset-shadow-gray-500'
                            style={{
                                backgroundImage: `url(${choose.background.path})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                        >
                            <Avatar/>
                        </div>
                        {/* 右边选择面板 */}
                        <ScrollShadow hideScrollBar className="pl-4 w-120 h-200 overflow-y-auto overscroll-y-auto">
                            <Accordion selectionMode="multiple">
                                {/* 头发 */}
                                <AccordionItem key="1" aria-label="head" title="头发">
                                    <div className="flex items-center flex-wrap">
                                        {clothingOptions.hair.map((item) => (
                                            <div
                                                key={item.key}
                                                className={`min-w-1/2 flex justify-center cursor-pointer p-1 rounded-lg ${
                                                    choose.hair.key === item.key ? "bg-blue-200" : ""
                                                }`}
                                                onClick={() => setClothing("hair", item.key)}
                                            >
                                                <img src={item.path} className="scale-50"/>
                                            </div>
                                        ))}
                                    </div>
                                </AccordionItem>

                                {/* 衣服 */}
                                <AccordionItem key="2" aria-label="clothing" title="衣服">
                                    <div className="flex items-center flex-wrap">
                                        {clothingOptions.shirt.map((item) => (
                                            <div
                                                key={item.key}
                                                className={`min-w-1/2 flex justify-center cursor-pointer p-1 rounded-lg ${
                                                    choose.shirt.key === item.key ? "bg-blue-200" : ""
                                                }`}
                                                onClick={() => setClothing("shirt", item.key)}
                                            >
                                                <AvatarClothing shirt={item.shirt} shirtArm={item.shirtArm}
                                                                type={item.type}/>
                                            </div>
                                        ))}
                                    </div>
                                </AccordionItem>

                                {/* 鞋子 */}
                                <AccordionItem key="3" aria-label="shoe" title="鞋子">
                                    <div className="flex items-center flex-wrap">
                                        {clothingOptions.shoes.map((item) => (
                                            <div
                                                key={item.key}
                                                className={`min-w-1/2 flex justify-center cursor-pointer p-1 pt-2 pb-2 rounded-lg ${
                                                    choose.shoes.key === item.key ? "bg-blue-200" : ""
                                                }`}
                                                onClick={() => setClothing("shoes", item.key)}
                                            >
                                                <img src={item.path} className="scale-50"/>
                                            </div>
                                        ))}
                                    </div>
                                </AccordionItem>

                                {/* 场景 */}
                                <AccordionItem key="4" aria-label="scene" title="场景">
                                    <div className="flex items-center flex-wrap">
                                        {clothingOptions.background.map((item) => (
                                            <Card className='w-[calc(50%-1rem)] m-1'

                                            >
                                                <Image
                                                    removeWrapper
                                                    className="z-0 min-w-1/2 h-100 object-cover"
                                                    src={item.path}
                                                    onClick={() => setClothing("background", item.key)}
                                                />
                                            </Card>
                                        ))}
                                    </div>
                                </AccordionItem>
                            </Accordion>
                        </ScrollShadow>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}

export default App
