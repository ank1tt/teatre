import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import  { useNavigate } from 'react-router-dom';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    RiseOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Typography, theme } from 'antd';
// import PublishMovie from './PublishMovie';
import axios from 'axios';

const { Sider, Content } = Layout;
const {Title} = Typography; 

const AdminHome = () => {
    const [collapsed, setCollapsed] = useState(true);
    const [movies, setMovies] = useState([]);
    const {
        token: { borderRadiusLG },
    } = theme.useToken();
    
    const navigate = useNavigate();
    

    useEffect(() => {
        axios.get('http://localhost:8080/admin/get-all-movies')
        .then(response => {
            setMovies(response.data);
        })
        .catch(error => {
            console.error('Failed to fetch movies :', error);
    });
    }, []);
    

    const handleTeatreClick = () => {
        if(window.confirm('You will be logged out. Continue?')){
            navigate('/login');
        }else {
            navigate('/admin');
        }
    }

    return (
        <Layout style={{ height: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Typography style={{  top: 0, right: 0, textAlign: 'center' }}>
                    
                    <Title level={2} onClick = {handleTeatreClick} style={{color: 'cyan', fontSize: '25px', cursor: 'pointer'}}>teatre</Title>
        </Typography>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        Home
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        <Link to="/publish-show">Publish Movies</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<RiseOutlined />}>
                        <Link to = "/generate-revenue">Generate Earnings</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        backgroundColor: 'linear-gradient(to right, #434343 0%, black 100%)',
                        borderRadius: borderRadiusLG,
                        backgroundColor: 'black',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                   <Typography>     
                   <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {movies.map(movie => {
      console.log(movie);

      return(
        <div key={movie.id} style={{ width: '200px', border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h2 style={{ textAlign: 'center', fontSize: '16px' }}>{movie.title}</h2>
            <Link to = {`/publish-show/${movie.movieId}`}>
            <img src={movie.img} alt={movie.title} style={{ width: '100%', height: 'auto' }} />
            </Link>
        </div>
      );
      })}
    </div>               </Typography>
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminHome;