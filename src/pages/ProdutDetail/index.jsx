// @ts-nocheck

import ProductContext from '../../providers/ProductProvider';
import { BiSolidLike } from "react-icons/bi";
import { HiEye } from "react-icons/hi";
import { useContext, useEffect, useState } from 'preact/hooks';
import { Button, Textarea, Badge } from 'flowbite-react';
import { useUser } from '../../providers/UserProvider';



export function ProductDetail({ productId }) {
    const products = useContext(ProductContext);
    const product = products.find((p) => p.id === parseInt(productId, 10));
    const productsSimilar = products.filter(p => p.type === product.type
        && p.id !== product.id).sort(()=>Math.random()-0.5)
        .slice(0, 3);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const { user } = useUser();
    const [liked, setLiked] = useState(false);
    const [views, setViews] = useState(0);
    const [likes, setLikes] = useState(0);


    useEffect(() => {
        fetch(`http://localhost:3001/api/comments/${productId}`)
            .then((response) => response.json())
            .then((data) => { setComments(data.comments); console.log(data)})
            .catch((error) => console.error('Error fetching comments:', error));
        
        fetch(`http://localhost:3001/api/productLikes/${productId}`)
            .then(response => response.json())
            .then(data => {
                setLikes(data.likes)
            })
            .catch(error => console.error('Error fetching product likes:', error));
        
        fetch(`http://localhost:3001/api/productViews/${productId}`)
            .then(responce => responce.json())
            .then(data => setViews(data.views))
            .catch(error => console.error('Error fetching product views:', error));

        
        fetch(`http://localhost:3001/api/productViews`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                productId,
                userId: user ? user.id : null,
            }),
        }).then(responce => responce.json())
            .then(data => console.log(data.message))
            .catch(error => console.error('Error recording product views:', error))
 
    }, [productId]);

    const handleAddComment = () => {
        fetch('http://localhost:3001/api/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                productId,
                userId: user.id,
                commentText: newComment,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                setComments([...comments, { username:user.username, comment_text: newComment }]);
                setNewComment('');
            })
            .catch((error) => console.error('Error adding comment:', error));
    }; 

    const handleLike = async () => {
        
        try {
            const response = await fetch('http://localhost:3001/api/productLikes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id:  user.id ,
                    product_id: productId,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setLiked(data.liked);
                setLikes(data.liked ? likes + 1 : likes - 1)
                
            } else {
                console.error('Failed to toggle like:', data.error);
            }
        } catch (error) {
            console.error('Error toggling like:', error);
        }
    };

    if (!product) {
        return <h1 className='text-3xl'>Product not found</h1>;
    }
    
    return (
        <div>
            <div id='product' className='flex'>
                <img className=' h-auto max-w-40  mr-3 object-contain  md:min-w-96' src={product.pics} alt={product.name} />
                <div className='mx-5 flex flex-col items-start' >
                    <h2 className=' text-white text-left text-5xl'>{product.name} <Badge className=' inline-flex' color='dark' icon={()=><HiEye className='w-4 h-4 inline'/>}>{ views}</Badge></h2>
                    <p className='my-2 text-lg'>{product.desc}</p>
                    <div className='flex items-center my-3 '>
                        <h1 className=' text-white text-5xl'>{product.price} ₴</h1>
                        <Button  color="lime" className=' ml-10 bg-lime-700 text-white hover:text-slate-800  active:bg-lime-300'
                        >
                            Add to cart
                        </Button>
                        <Button className={`mx-3 ${liked ? '' : 'bg-lime-700 text-white hover:text-slate-800'}`} color={`${liked ? 'lime' :'lime'}`} onClick={handleLike}>
                            <BiSolidLike className=' h-5 w-5' />
                            {likes}
                        </Button>

                    </div>
                    <p className='text-lg'>Також можете зацікавитись:</p>
                    <div className='flex flex-row flex-wrap justify-center'>
                    {productsSimilar.map(product => (
                        <div key={product.id}
                            className=" w-44 rounded m-2   bg-inherit outline outline-2 outline-orange-800 "
                        >
                            <img src={product.pics} alt={product.name} className='mb-4 w-full h-28 object-cover ' />
                            <div >
                                <a href={`/product/${product.id}`} className="text-xl font-semibold tracking-tight text-white">
                                    {product.name}
                                </a>

                                <div className="flex mt-2  mb-3  items-center justify-center">
                                    <span className="text-lg mx-2  text-white">{product.price}₴ </span>
                                    <Button size="xs" color="lime" className='bg-lime-700 text-white hover:text-slate-800  active:bg-lime-300'
                                    >
                                        Add to cart
                                    </Button>
                                </div>
                            </div>


                            </div>
                    ))}
                        
                    </div>
                   
                    

                </div>
                
            </div>
            <div className=' mt-8 mx-auto flex-col flex  w-8/12 '>
                <h3 className='text-xl font-semibold mb-2'>Comments:</h3>
                <ul className=' bg-zinc-800 rounded text-start p-2'>
                    {comments.length!=0 ? (<div>{comments.map((comment, index) => (
                        <li key={index} className=' text-lg'>
                            <strong> {comment.username}</strong>: {comment.comment_text}
                        </li>
                    ))}</div>) : (<div>
                            <span className='text-lg text-center'>No comments</span>
                    </div>)}
                </ul>
                {user ? (<div className='mt-4'>
                    <Textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder='Add a comment...'
                        className='w-full'
                        maxLength={50}
                    />
                    <Button
                        onClick={handleAddComment}
                        color='lime'
                        className='mt-2 w-full bg-lime-700 text-white hover:text-slate-800 active:bg-lime-300'
                    >
                        Add Comment
                    </Button>
                </div>) : (
                        <div className='mt-4'> 
                            <h1>Only logined users can leave comments</h1>
                        </div>)}
                
            </div>
        </div>
    );
}
