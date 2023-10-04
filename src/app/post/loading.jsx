/* import request from '../services/api';
import { Post } from '../services/models/models';
const fetchPost = async() => {
    await delay();
    const result  =  await request({
        endpoint: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET',
    });
    return result as Post[];
}
const delay = () => {
    return new Promise(resolve => setTimeout(resolve, 5000));
}
export default fetchPost; */
import PostLoaders from '../../components/skeleton/postLoaders';

const Loading = () => {
    return (
        <PostLoaders />
    )
}
export default Loading;