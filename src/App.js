
import './App.css';
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import AvailableComponent from './Components/AvailableComponent';
import DropArea from './Components/DropArea';
import TitleComponent from './Components/TitleComponent';
import PriceComponent from './Components/PriceComponent';
import ImageComponent from './Components/ImageComponent';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCloudArrowDown} from '@fortawesome/free-solid-svg-icons'; // import specific icons



const components = [
  { id: 1, label: 'Title', type: 'title', content: 'Dell' },
  { id: 2, label: 'Image', type: 'image', src: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/category/laptop/xps/fy24-family-launch/prod-312204-apjc-laptop-xps-16-9640-14-9440-13-9340-800x620-pl-gr.png?fmt=png-alpha&wid=800&hei=620', alt: 'Sample Image' },
  { id: 3, label: 'Price', type: 'price', price: 200 },
];


const App =()=> {
  const [layout, setLayout] = useState([]);

    const handleDrop = (component) => {
        setLayout((prevLayout) => [...prevLayout, component]);
    };

    const renderComponent = (component) => {
        switch (component.type) {
            case 'title':
                return <TitleComponent content={component.content}  />;
            case 'image':
                return <ImageComponent src={component.src} alt={component.alt} />;
            case 'price':
                return <PriceComponent price={component.price} />;
            default:
                return null;
        }
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="app bg-gray-50 min-h-screen p-8">
                <div className="flex justify-between space-x-8">
                    <div className="w-[50%] bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-2xl font-bold text-blue-600 mb-4">Available Components</h2>
                        {components.map((component) => (
                            <AvailableComponent key={component.id} component={component} />
                        ))}
                    </div>

                    <div className="w-1/2 bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-2xl font-bold text-blue-600 mb-4">Template Layout</h2>
                        <DropArea onDrop={handleDrop}className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-8 h-64 bg-gray-100">
                            {layout.length > 0
                                ? layout.map((comp, index) => (
                                      <div key={index} className="m-4">
                                          {renderComponent(comp)}
                                      </div>
                                  ))
                                : (
                                  
                                  <span className=" flex justify-center text-center text-gray-600  bg-slate-200 rounded-lg px-2 py-[50px] "><FontAwesomeIcon  className=" px-4 py-1" icon={faCloudArrowDown} />Drag and Drop here</span>
                                 
                              )}
                        </DropArea>
                    </div>
                </div>
            </div>
        </DndProvider>
    );
};


export default App;
