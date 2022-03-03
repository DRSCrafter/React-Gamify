import ItemsMenu from "./ItemsMenu";
import BlurryDiv from "./BlurryDiv";
import * as React from "react";

export default function NavBar({items}) {
    return (
        <BlurryDiv>
            <div style={{
                display: 'flex',
                width: '50vw',
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 20,
                marginBottom: 20
            }}>
                {items.map(itemList =>
                    (<ItemsMenu title={itemList.title} values={itemList.values}/>)
                )}
            </div>
        </BlurryDiv>
    );
}