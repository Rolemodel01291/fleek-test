import React from "react";
import { useHistory } from "react-router-dom";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";


export default function CardItem({ page, results }) {
    let display;
    const history = useHistory();

    if (results) {
        display = results.map((x) => {
            
          let { id, image, name, status, species } = x;

          const navigateTo = () => {
              history.push(`${page}${id}`);
          }

            return (
                <div className="px-4 mb-14" key={id}>
                    <Card key={id} className="min-h-64 max-w-full">
                        <CardImage
                            src={image}
                            alt={name}
                        />

                        <CardBody>
                            <H6 color="gray">{name}</H6>
                            <Paragraph color="gray">
                               Specie: {species}
                            </Paragraph>
                            <Paragraph color="gray">
                               Status: {status}
                            </Paragraph>
                        </CardBody>

                        <CardFooter className="-mt-8">
                            <Button color="lightBlue" size="lg" ripple="light" onClick={()=>navigateTo()}>
                                Details
                            </Button>
                        </CardFooter>
                    </Card>    
                </div>
                
            );
        });
    }else{
        display = "No Characters Found :/";
    } 

    return <>{display}</>
}