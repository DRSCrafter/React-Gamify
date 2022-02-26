import ItemsMenu from "./ItemsMenu";
import BlurryDiv from "./BlurryDiv";
import * as React from "react";

export default function NavBar({items}) {
    return (
        <BlurryDiv>
            <div style={{
                display: 'flex',
                width: 700,
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 20,
                marginBottom: 20
            }}>
                {items.map(itemList => (<ItemsMenu itemList={itemList} /> ))}
            </div>
        </BlurryDiv>
    );
}