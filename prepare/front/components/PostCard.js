import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, Button, Popover, Avatar, List, Comment } from 'antd';
import { EllipsisOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, RetweetOutlined } from '@ant-design/icons'

import PostImages from './PostImages';
import CommentForm from './CommentForm';

const PostCard = ({ post }) => {
    const [liked, setLiked] = useState(false);
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const onToggleLike = useCallback(() => {
        setLiked((prev) => !prev);
    }, []);
    const onToggleComment = useCallback(() => {
        setCommentFormOpened((prev) => !prev);
    })
    const id = useSelector((state) => state.user.me?.id);
    // ES6 새로운 문법(optional chaining) : me 객체에 id 가 있으면 id 가 들어가고 없으면 undefined 반환 

    return (
        <div style={{ marginBottom: 20 }}>
        <Card
            cover={post.Images[0] && <PostImages images={post.Images} />}
            actions={[
                <RetweetOutlined key="retweet" />,
                liked
                    ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
                    : <HeartOutlined key="heart" onClick={onToggleLike} />,
                <MessageOutlined key="comment" onClick={onToggleComment} />,
                <Popover key="more" content={(
                    <Button.Group>
                        {id && post.User.id === id ? (
                            <>
                                <Button>수정</Button>
                                <Button type="danger">삭제</Button>
                            </>
                        ) :  <Button>신고</Button>}
                    </Button.Group>
                )}>
                    <EllipsisOutlined />
                </Popover>
            ]}
        >
            <Card.Meta 
                avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                title={post.User.nickname}
                description={post.content}
            />
            <Button></Button>
        </Card>

        {commentFormOpened && (
            <div>
                <CommentForm post={post}/>
                <List 
                    header={`${post.Comments.length}개의 댓글`}
                    itemLayout="horizontal"
                    dataSource={post.Comments}
                    renderItem={(item) => (
                        <li>
                            <Comment
                                author={item.User.nickname}
                                avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                content={item.content}
                            />
                        </li>
                    )}
                >

                </List>
            </div>
        )}
        </div>
    )
};

PostCard.propTypes = {
    post : PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.object,
        content: PropTypes.string,
        createdAt: PropTypes.object,
        Comments: PropTypes.arrayOf(PropTypes.object),
        Images: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
}

export default PostCard;