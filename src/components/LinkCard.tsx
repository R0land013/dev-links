import Card from "./Card";
import SomeImage from "data-base64:~assets/icon.png";
import NonFavoriteImage from "data-base64:~assets/non-favorite.svg";
import LinkChainImage from "data-base64:~assets/link-chain.svg";
import Button from "./Button";


const LinkCard = () => {
    return (
        <Card className="flex flex-col p-8 pt-5 m-5">

            <div className="w-full flex flex-row items-center justify-between">

                <div className="flex items-center justify-start">
                    <img src={SomeImage} className="h-8" />
                    <h3 className="text-header-color font-bold text-2xl ml-1">
                        Link Name
                    </h3>
                </div>

                <button>
                    <img
                        src={NonFavoriteImage}
                        className="w-10" />
                </button>

            </div>
            

            <div className="mt-5">
                
                <Button>
                    
                    <span className="font-bold text-lg">
                        Open Link
                    </span>
                    
                    <img
                        src={LinkChainImage}
                        className="w-7"/>
                </Button>

            </div>

            <div className="w-full mt-5">
                <p className="text-text-color text-base">
                    Lorem ipsum dolor sit amet. Quo dolor quisquam non odit officiis est quos quia. Sed voluptas deserunt 33 neque optio qui iusto eligendi quo architecto autem eum eligendi nobis ea deleniti dignissimos.

                    Et quasi reprehenderit et eaque quos et doloremque tempore. Eum obcaecati incidunt qui libero omnis non architecto blanditiis et excepturi ipsum qui sunt sint id placeat modi sed vitae excepturi. Ut sunt minus qui accusamus repellendus ut explicabo dignissimos rem commodi harum ea magni voluptas et neque excepturi.

                    In nLorem ipsum dolor sit amet. Quo dolor quisquam non odit officiis est quos quia. Sed voluptas deserunt 33 neque optio qui iusto eligendi quo architecto autem eum eligendi nobis ea deleniti dignissimos.

                    Et quasi reprehenderit et eaque quos et doloremque tempore. Eum obcaecati incidunt qui libero omnis non architecto blanditiis et excepturi ipsum qui sunt sint id placeat modi sed vitae excepturi. Ut sunt minus qui accusamus repellendus ut explicabo dignissimos rem commodi harum ea magni voluptas et neque excepturi.

                    In nLorem ipsum dolor sit amet. Quo dolor quisquam non odit officiis est quos quia. Sed voluptas deserunt 33 neque optio qui iusto eligendi quo architecto autem eum eligendi nobis ea deleniti dignissimos.

                    Et quasi reprehenderit et eaque quos et doloremque tempore. Eum obcaecati incidunt qui libero omnis non architecto blanditiis et excepturi ipsum qui sunt sint id placeat modi sed vitae excepturi. Ut sunt minus qui accusamus repellendus ut explicabo dignissimos rem commodi harum ea magni voluptas et neque excepturi.

                    In neque voluptas aut aspernatur commodi est galisum odit sit vero consequatur vel consequatur quis et adipisci voluptas eum blanditiis quam. Qui vitae dolorem aut deserunt eius cum pariatur consequuntur At adipisci repellat vel deserunt nostrum aut enim nesciunt ea mollitia error.
                </p>
            </div>
        </Card>
    );
};

export default LinkCard;