import styled from "styled-components";

import { AiOutlineHeart } from "react-icons/ai";

export default function PostSection({ username, description, link }) {
    return (
        <PostsSections>

        <ProfilePicture>
            <AiOutlineHeart/>
        </ProfilePicture>


        <Post>
            <PostInfos>
                <UserName>
                    <h2>{username}</h2>
                </UserName>
                <Description>
                    <h3>{description}</h3>
                </Description>
            </PostInfos>
            
            <PostContent>

                <LinkInfos>
                    <h3>Title Link</h3>
                    <h4>
                        Description Link.
                    </h4>
                    <h5>{link}</h5>
                </LinkInfos>
                <ImageLink>

                </ImageLink>

            </PostContent>
            
        </Post>              
    </PostsSections>
    )
}

const ProfilePicture = styled.div`
    height: 100%;
    width: 60px;
    background-color: #876525;
`;

const PostsSections = styled.div`
    height: 330px;
    width: 40%;
    padding: 20px;
    box-sizing: border-box;
    margin-bottom: 30px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-family: 'Lato', sans-serif;
    font-weight: 300;
    color: #FFFFFF;

    background: #171717;
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Post = styled.div`
    height: 100%;
    width: 100%;
    padding-left: 8%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    position: relative;
`;

const PostInfos = styled.div`
    height: 35%;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;

    h3{
        color: #B7B7B7;
    }
`;
    
const UserName = styled.div`
    height: 35%;
    font-size: 22px;
`;

const Description = styled.div`
    height: 60%;
    font-size: 22px;
`;

const PostContent = styled.div`
    height: 60%;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border: 1px solid #4D4D4D;
    border-radius: 10px;
`;

const LinkInfos = styled.div`
    height: 100%;
    width: 70%;

    padding: 25px 20px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3{
        font-size: 18px;
        color: #CECECE;
        line-height: 19px;
    }
    h4{
        color: #9B9595;
        line-height: 15px;
    }
    h4, h5{
        font-size: 12px;
        color: #CECECE;
    }
`;

const Form = styled.form`
    height: 75%;
    width: 100%;
    padding-bottom: 50px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    input{
        height: 50px;
        width: 100%;

        padding: 10px;
        box-sizing: border-box;
        border: none;
        border-radius: 5px;

        font-size: 15px;
        color: #949494;
        background: #EFEFEF;
    }
    button{
        height: 35px;
        width: 150px; 

        background: #1877F2;
        border-radius: 5px;
        color: #FFFFFF;

        position: absolute;
        bottom: 0;
        right: 0;
    }
`;

const ImageLink = styled.div`
    height: 100%;
    width: 30%;
    background-color: blue;
`;

