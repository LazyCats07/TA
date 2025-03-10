import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Card, Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap';

import {GiElectric} from 'react-icons/gi'
import {IoWater} from 'react-icons/io5'
import React, {useState} from "react";
import axios from "axios";

const Home = () => {

    const [data,setData] = useState({});

    React.useEffect( () => {

        