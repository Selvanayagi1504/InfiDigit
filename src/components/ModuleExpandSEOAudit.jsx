
import React from "react";
import Chart from "react-google-charts";
import {useState, useEffect, useRef} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button,Modal} from 'react-bootstrap';  
import { default as ReactSelect } from "react-select";
import { components } from "react-select";
import "antd/dist/antd.css";
import { Table, Input,  Row,  Col } from "antd";
import {Dropdown} from 'react-bootstrap'
import Highcharts from 'highcharts';
import {ModuleExpandTickets} from './index';
import Pagination from '@mui/material/Pagination';
import { addClass } from "dom-lib";
import {Link} from 'react-router-dom';

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };

function ModuleExpandSEOAudit() {
    const [show,setshow]= useState(false);
    const [sidenav,setsidenav] = useState(false);
    const [page, setPage] = React.useState(1);
    const [notes1,setnotes1] = useState([]);
    const [inputimg, setinputimg] = useState([]);
    const [teamlist, setteamList] = useState([]);
    const [selectionType, setSelectionType] = useState('checkbox');
    const [teamcol,setteamcol] = useState([]);
    var totalpage=100;
    const [pageArray,setpageArray] = useState([{
        page:1
    },{
        page:2
    },{
        page:3
    },{
        page:4
    },{
        page:5
    }
    // ,{
    //     page:6
    // },{
    //     page:7
    // },{
    //     page:8
    // },{
    //     page:9
    // },{
    //     page:10
    // }
        ]);
    const handleChange = (event, value) => {
        setPage(value);
    };
    useEffect(()=>{
        var data = []
        data.push({
            id:1,
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            input:[
                {
                    imgsrc:"data:image/jpeg;base64,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"
                }
            ]
        })
        data.push({
            id:2,
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            input:[
                {
                    imgsrc:"data:image/jpeg;base64,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"
                }
            ]
        })
        data.push({
            id:3,
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            input:[
                {
                    imgsrc:"data:image/jpeg;base64,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"
                }
            ]
        })
        setnotes1(data);
        data = [];
        data = [
            {
                imgsrc:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgWFRISERgYHBUYGBISEhEREhgYGBgZGRgYGBgcIS4lHB4rHxgYJjgmLDAxNjU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjYjISE0NDQxNDU0ND80MTQ0NDQ0MTQ0NDE0NDY1MTE0NDQ0NDQ0NDQ0NDQ0NDY2MTQxNDQ0Nf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAACAwABBAUGBwj/xAA6EAACAQMCAwYEBAUEAgMAAAABAgADESESMQQFQSJRYXGBkQYTscEyQqHwFVJy0eEUI2KCkrIkQ6L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAArEQACAgEDBAEDAwUAAAAAAAAAAQIRAxIhMQRBUWGBE3GxIkLwBTKRocH/2gAMAwEAAhEDEQA/APIBIGjM06cygkwUjnsWftA0XvNBSQJDUFmZ0lCaSt4kpGpAmCBIBDVJLR2FidMGOO3vA05lWMJJoTY+X3mZY0bDzP2ksTGEfaA8vXB3kgLIizHMMQCk0TGhZMdSFx7/AEi9MNWt7D6QGyXhqIlZopC8TRLNCYAgtkQ1WQrYSGxCLQ2GYVoBMAAeDqlVDmBeUkUNVt4tjKEhOB6ykgAY4lK0kphmOhmmk98S2mdHsYav+/WTpFRckp3zJKodG8LKIjJdsTmMhF5IRFveURGANoBjXGIpd40NBKJRSXeFC6AVowYsr18Zo0ynSNSGmZykYoxGFJNEeoLE6cw1WGaf79JQisLFuOkC+DHP3xWmUmNAWktHfLlMkdhYq31jqOIurv6wkO0bdjNy2gVGtFF4p3vI0k0Gz3z5RZeKLyMdpaiVQ12x6xF5ciiVQFrIReVbMZaIAEWUywpbCACTIsYySgkdjKvJL0yR2B0VN/0jgsFEh3nJZkJdYJOIxmgERgC+3tMhvNj7RNsS4lIGkd45RFotjHgRSYmVaWBLkkiLIi2jjFGAAhpRHZ/f76SMISi8tDFqIB3j2WIdYJjQwHaQLLS140LiDExGmAyWmnTAcRqQJmVniWePqiZXmsdzREDQmMC8pzvLoqhivGrEIcR6SGSwgtz7QgM/r+sYqbS9ODM7JszkQgLn2jHWDt+kpMLCdYqG5lWzHYwNMkfiSAWdBsRbmEz3i2nKYgGQy9MkooB2goJKkEG0pIYxYZaILSaoaQobeGIpYxTFQi2i6hz7fSMUxb5MQEEYqwEEdE2Jg6cRWnPofpNBGIBWNSGmLppGiRBaWdo3IGwTM7maGEU6RRYIyu0y1Mmba6YmMCxnTE1iAgyfCRllKYbbzQooR1IwGXAPnLWTJCZtR5Km0UjdkeZ+0PXewmbiRRSyMMQS9jCLfSKgoWDvKLSr/eWoxLoqg9Mku0qTYjeVzC0TQ9EqSDggkEeINjLCTmMxGmJqLNjpEMhJAALE2AAFySeggthIyOIu06XMeXPR069ALg2VW1MLDN8WHSc5+kuMlJXF2i6BjEG0ErHIJTYmWqZHnCGCPOWptKtken1iTELLRdWsqjUxsJbnSCTsJ1fgnkY42s1SoA1KlYaG2dzlQR1AGT5iRlnHHB5JcL/fo0x49ToRy7lHG1lDLQVEI1K1aotPUvQhctY99p7PhvgqkUVm4hySAeyiAC4vbJN5OdcIyFuIYBmpK2g62VcgqpZRg2vv4Rf+tZQAHYAWAyRtieS/6hKS1JKn47ejphghKWmTUfbD4j4Gv+DiR4K9Ow/8lJ+k4XH/AA7xFDtPT1IN3pnWg87ZX1AnoaPOKg66xvm17CdThOfrcB+wc742wZUOtly06Fk6ZR4aftM+Zyp6/wCKOAov26QVH3ZUsFbrcr0PiPUdR5Az0YvVFS8nNPHKCTfD4Lg7mWdvWCPtLRmhbpMTJn1m4NMrkZm0DWJiqpaCIysMxbTcsZfHvJeUpltAQWvpBSpYwGMUcmFBRp13MZrxMamFqioKH3jUbFvKZbxqNFJAzXpki9ckzomj2KMtcBWslT8r2sr/APFvHx/ZwVKLIxVhpI6RYnf4dxXQXt8xLWY7HzHUHrOHI/pPV+38Er9X3OGyzscl4HSPmsMm4TwHVvX6ecztwBauEA0hrH+ldz9/0noKpCkKALDYdMeE5euzpY1GPf8AA4Rtni+b1TVqM17gdlfIfsn1nN+V+/SdrmHEfMctgAYUKAot328d4PD8rqOLqlh/MxCL7nf0nbiqEEntSJfO25yGT9+ksrNvE8KUwWRj3Iwe3naI0zRNS3RLFIsb8uGE28vuY0WAJOwBJ8gM/SNDONxatUqJw9MandkW18anwoPcOpPdPtXwz8PJwfDrRU62uWepa2t23NugwAB3AT5F8AOH5pTdj0rOP6vlsAPYn2E+4LXnL12WMUscuOTuxQaWxn47g1dHRgCrqysD1DCxnzn4ho/6dgiVGc2uVcKwUHa7fiv6z6gal583+NuHC8SWH50Rj5i6fRROLpccJZK7eB5708Hnl49h0HoSI/8AixIsy6h4m/72mQ04Pyp6kMcMbuKPOkr/AJQvjuKcEMnzLYOGBI9OsL5mrtWsTv5wzTlMTgHpgbbXJ+pMpy7HZPqnkxaJq2qp99gScSusMiLaCORCWSZKwtNdR7TI73m8DWIiobkyrSNKvNmyxj7+n+Zdsen3gBv36QnP2iQhTCUBYywf35CC7SkMHrCJgqJTCMA1MJWgdZZEloBweXEapIqFR7yhwKNg1qanFtyPc2jjw78O4LDBxcfhI8/1mBDOxywrUvTfJ02RuthnT9xPPyRlpak7TM402dThimX/ADabemTb9+E53Es73VAWZsDuA6knpi8HhnPaW99wSPA2h8RxZRLLbUx3tmw2/X7TxoQc8qXNf84NnsjPT4ZaYJVVquty1SpYUUtuc727z3dJy+J4t6mWqaxt2WunpbEJna5JZiTubm5i9M9iEJJ3J2YtqqQkLKdM+00MsEpNiRInO+IeL0UrdX7Itvbr9p19M8j8U1dddKdwqqouxuQNRySB3ACXj3kXBWzHyDm54aulUC+gnb/kLH9CZ9h5X8SpVF0qK3/G9mHmJ8JZRYnx3jPmspFmK9ldiR+UTHq+hj1FNumjuhl0qj9FpzYW/wAzx3OeYrxNQupDIBoVhkEKTcjwvf0tPmScdWK6PmvZsaS5AN8ZuZ7rldEpSpqRYqqgjx05/WYYOg+g3Ju3wjLqMuqKSD+XJ8qaBLtOqjjMwpzO6zc6zHVEekkU0RUGfQfSNaKrb47h9BGikYuJeZbx/EIYlCVIINrHe2rHXHUeHWbxqjWIJaxB6jOdsRxAR0fJQlXU96hsjzFiD4iHxPDXBdMWy9MG+kH86H8yG++4vnoTODdWBpOQqNlah/8ArfYN/ScBvCx/KINpqyhHEUijlD0Nr946HyIsfWLYGwPQkgelif8A2E6PG0GalqYaXoH5VRTvozob0sVv3BYHG8G3zEooCW0qoB72ZnJPo2/cJMZpqnzvfwBgti9sbX6X7os5vOrzrhRR0Ub3ZQXcnB11LWUjpZFTHeTOVNYu1YBtvIN5SNmWYwIRuYAMvVuPL7yWsYDLtJCkgI9lxPDNTPa26ObAHbIztmHwvEBWVwwNipuD+/GeT4XnDPhrk5N+hK7alvkeEFK7I+kdvAwNR3HQ3/TacVSlceH+QWJH0Fl0M3QMTb3v95j4qoSwB3AF/Pcj0vb0mBOYsWT8NiFJu3SwLfrM9DmKuNRbtXNwSACb/lY7zjw49E3Kh5IuqR0SJNMzJxNgxawIJKjcFRsTfY/2jw5K69NgWIuAQuobgToWRN1x9zBxaL0yikJlYbgj99e6TVKTUladioDTPnfxIx/1NXzUemlf7CfRWafO/iJf/kVfNf1UGbY+TTFycrVDDXI9B7C0hXB9PrBQ5m5uanzYDchRjvsBPpIa1h5Tw/w7wYqVRe9k7Z8bEWHv9DPbsJlN70YZH2DV4YaIURqiQZls0xVjNdQTO6XicgMgltTjClpLSGwM1WniZGo9MepAHXqZ1GSZ6lPEuM2NSM3COFZUqakF+xUUf7iE9V/nQ3N18SRnc+M4EgkWXVpLAU806ib66f3Xpm21gC1XT8JxuVYBkPmpwZv4DiVqL8rSKT3L0aiMdC1BnSAblQ1tr2vbAg5NPUuO5qnZq+GnV2UuofAoVVOz02BNNj4gqUv3Mk7XK+ADcfUqsLKiUwrNtcrYt6Kje5nn+Vt8rikJQolUOrUzjQ43S3g6oR4FZ3ua13agKVFdT1Lp2bbEnUSegC6hc4GqcXUSazJR2Ul/jyUjwvOeO+dXqVBs7sV/pGE//IEzUKLubIjOe5FZz7Cej/h/DcN2HDcbX606YLU0PcR1/wCwP9MTxPHcSRpHDfLTonyHZR6MNI9FE71m2SgtvL2QHLpcrqE2sFI3BOpx5ol2HqIFeiq4vqbqQw0j2vf3HlD4jiazCztU0/ym6J/4iy/pM6maR1PeTXwIWRmWN5DvLImiAZokitRkjACrwBpg3Ra2Aww4tfvsw1Dw/wAg5V5xUC6QUXcdmlRSwxcCyXHneenanncjf6YnL4zgVY76b72tm2xz5mc8b/duOMzOnHBhYAqbrdg1wb7WDfhyB1tAfjbu2oaTgabhQCoAN7nBNh/mM/0CWIOo33sBuL/pt7S+J4Is2pCEwBpYGxIOcx0rspys28u4tSbVNTA4DdoG5PRuu/lnrPScz4qgiItEMtzc0yx0npgdDe+Z4qtRq01XSSTpOtcGw65Pdc+8RUqOUV2dc9nSey+MXC/mFuov4yNKk/Q01VHq63NHYsKZLAZVagS4t0NtzY9IHAcxfXd6bFCMqrBGOMFbg4x3H+3EoK4pmrYMlyD33ABI/fdMy83dcXHU9pRcGxsLi1+kyeHtFKkS1Z7ZuLpsABhiSBm4I8xjqNpx3+HjxPEtnSmhWd8BrgFQFuMkkLnoDOG/FOoVw4Ia7C3QqRi3Tce4m3hueBQO2AxAFzi17Fhjpv6gS4RlBp8ruS41wcGvwjqWQowIJUg9CDteJXhH6IxPcBcz1tDmIAfUA+sG5Nj1N2GfERnBU7uCqX3YAFQbW3/UfvEt5ZW0lsdUPotPVafrgP4Z5eaVLW1tT72INguynuObkeM7JM08Oq0rtUS6uVUrbDEmw0kfmzjYxnEUBoV1AVCt7uwDA3ZWU+NxFkuk4q759HC4ycnaMYxaXqkenc9g6/DZvQHf0hjh3vp0m9ibHGLXvnwBPpFuxOLXYreCUjKaE7DV/T2vpLfs/iIW2TdlFvOSLS/Ahkg/Lj1AOzIfJlMIoEYhiuLgkMGXIxlTJtBpdmPRAde7fw3muoqCw1kmxJARrLboe/0mb+IqmFIRjftZ17XxcXUdLj3k6k1sr+BqErHLwHEEXNR6QtcfMqOl/ISqvJyReoyIcFOJp20atwHK4t44YeMzn4hNEqQ9VxaxVQWFxbshmtYdr9Js4X4vpEWam6avxa9BU+dj9pjP612lsu6N/p0uTqcz4cPTQuoRwyN2f51Cqc9xUtnuVT0l06hCsqEX2ze5IW+kAEFj4AjznJ4zm6llVCpXpdlVV8M/ht7Q24EMgZ/lltT2NZnang7oiYffdj9bTF45SmnLZI0cNjz3Hcye5VUKWJFqigsP+lgieQW/iYunzauBiq6+CHQPZbCegqBXH+8q1GVtPzGoBeyLroBDi6g5vvjuxM9Xk9J1LUw1PTbWquK2m4uCUvqAIB2LWttPQhOHDj80ZOLRyW5vxJAvWqN/UQ3XxmapxDt+J2Phew9hibX4S3VW8Vvb9QDBHCzZaF/akvgjUcxllOZ034SZ6nCy1JApI595Jr+RJHqRVnacXvMtZMR2qQi4mJknRgIIjErWxYH3H0jHSJKZvL5KTHOEbcd2Olgb28r2jFRNGgopGcDBN985tMFzHKxhpFuA3L0amEYsvWysQAc5sMFrYuZza/KO2FWppVrdrSGOB3Y7p19RhIlzJprhlKTR52vy10Ufhe+q+knFjne3d9YPD0daMLBXUqNWNL3NrHxGJ6d6AYEEAjumTmFIJRfSoWym1gBa8dtlKZy6tB6TFGIJtqsL4Ude4DcQV4xhpOog74uLHYzLR5iysrsA57SsTuy2GD7zPTqgkBjYDF8kARpPuWej4bnjhR2i1jsRchji+cWiuJ46ooQ1NYuCwLHssCTnxsb+0ocsASm6AuH0FlbO9sWGSpO81NwNVj2r0wC6fK1uVUq2cE7MQdvCS3peyE5mehzJ0YsLs2381u8nGRjrNic5rBy6vodbEl1VgpvbIPsRkGZX5K/So1r3sT34tj0xF1+T1RvUDnc6Sb46nHahrT9BrT7nUTjAzayAmoG5Ts9onJAHQ39InjOJCHDX8c39xbM57curhgmqn4ENdbYtcgHwl8Ry3iQDcLa4Fg4bUTjA94bc2W5Rqi6nMmUizHzazW8v8eMg5/U1AaVZb7G97WtjxG4JvMFbl9RXCOArEKfBQbgE28QZtq/DvEKBpVHufyONQv1N7C3rE4QbtkWkaqXPyGDWZjswqBCNrYOQcXtgfeaeO5mjIGOk6rG5XtLk4/T9Z56pwrJq1KQAdJNtQDDcX2veHw2tgURRUvZiLG/YINx7W64aChFU4lJ19jdx3MhqUFfyi66cLqJJsO/SReZRzEAsVUC/4BoDWGx28vczT/C2qB3Ysls7bk7g32G2Y3hfh3UAzvoscqASQtrixvvc7+UHpS3Jc0xC8WpS4AJIYsLi2tc/h3nY+Huamox4fW6rWUICxB0VSDoZelr2Uj82vO05HA8uLVGTViz6je9+gJAxqyY1+UvRamyuhIcFQCdVwVKscbAge8TUWqNNfY7nBc9K7uyOBZkVs3Fr4/6nvt5R38dRibknqAwBI3/Cd5xeb8kdq9V6bLZmaopN862LhB5XtOW/Kq6As4QBepf6AbxwqtmJzTe56vguecOrEOocHYGmGswIxq3se17jxnRTm3BMQGp001YW1Rwb9bgHHr3T5w1OppL/AC20jd7NpHmekPhteq5RlG93UlTtYdrB/wAS2thfp8H0ZK/CMbaWtYW01L5Pcf7xCpwr37VRBcgNrRhceGnw7/aeY5JxdN0emyH5hvpZEReoF79LWB9TFVqaj5qs7/7TFcAMr2BOeq48+szurTCoPsd35I/KCR0Opf7STk1q1dTZfw2GnSo06SARbPcRJMLl5QVHwjo1JWqXVWAqzqo5ggLy3pxlNIwiTwTZz2owkpTWVkCw1DsUtLMalKGohKIOQrJ8uZua0gaT+X3E3CDWphlK94IiT3GnueB/091A7ift/aKr8KROq6FWta3aIJPT065xKNMnpqHeN894nTR0WdXlNS1FATsLexM1HiCck38TvOZSfSoA/e8JX+0hxMmtzpDiZHrXFr28fXac+8gJi0i0m53uLAC5IF/M9TOitTxv4zjUzNlAzOUafoUuDoVEDjy/djNKAAADoJkpzQhmdK7Jvag9CkEFVIbcECx8++c3huWJScsikBwfHSbg2HcP7TpCWZVgpNCTBIjmSRkibAzLRXJCqD2TcKATbAuRI6A2JAJGx7vKN0wXElbDcmxDtF1XvggEdQciOZJldZcQItUbAADutiOqBXGlxqB6GY2p5jUBlbAxFD4f0PrFRNBDWVGLVBnZsYj6HJUUsSWcMblWtbwvYZtczXTeGXxBq9xuUmYanJqRN/8AcGALCo4GABjPhJNeqSIWp+TOFvLFOHTEaBG2KwEX9+kFhHhYtlisBQEu0mmGqxNgRFhhYSJGBYgAUSoUq0dAc/juWo5udQubnSbZ7/AzI3BKvVvW1/e07RWY+Ipy4yfkpSZyKi5xBRZoqUswUTM0suwQkeiR1OnHpTmbkS5GZac00llssimJuyGzYkYGEyh8QWqGTQG0vItSYGqSxVhQqOmGvCaYqVWPDyWhhmLeGWlQAWVimpzRAMAMzUpFpzYFxAdIWKzNeQiG6yKJdjAvJC0SQsBaxqySRsBvSDJJIBAmEJJI2JhrLWSSCEC0gkklFFjeIqSSRIDBV3iTKkllo1UZpEuSZy5IZTbRTSSRgQSpJIAC0hlyRgNpTQskkkA1hCSSQwIJGkkggCWRpJIwEVIsSSSgJJJJGB//2Q=="
            }
        ]
        setinputimg(data)
        data=[{
            module:"Content",
            pointsChecked: 50,
            pointsPending:10,
            compliantPoints:30,
            nonCompliants:<Link to={{pathname: '/module-expand-non-compliant', search: `?id=1`,state: { detail: "1" }}}> 20</Link>,
            highImpact:5,
            mediumImpact:10,
            lowImpact:15,
            p0:5,
            p1:10, 
            p2:5,
            p3:0
        },{
            module:"Crawl",
            pointsChecked: 60,
            pointsPending:20,
            compliantPoints:40,
            nonCompliants:<Link to={{pathname: '/module-expand-non-compliant', search: `?id=2`,state: { detail: "1" }}}> 10 </Link>,
            highImpact:2,
            mediumImpact:5,
            lowImpact:3,
            p0:5,
            p1:3,
            p2:2,
            p3:0
        },{
            module:"Total",
            pointsChecked: 110,
            pointsPending:30,
            compliantPoints:70,
            nonCompliants:<Link to={{pathname: '/module-expand-non-compliant', search: `?id=3`,state: { detail: "1" }}}> 30 </Link>,
            highImpact:7,
            mediumImpact:15,
            lowImpact:18,
            p0:10,
            p1:13,
            p2:7,
            p3:0
        },];
        setteamList(data);
        const columns = [
            {
              title: "Module",
              dataIndex: "module",
              key: "module"
            },
            {
              title: "Points Checked",
              dataIndex: "pointsChecked",
              key: "pointsChecked"
            },
            {
                title:"Points Pending",
                dataIndex:"pointsPending",
                key:"pointsPending",
            },
            {
                title:"Compliant Points",
                dataIndex:"compliantPoints",
                key:"compliantPoints",
            },
            {
                title:"Non Compliant",
                dataIndex:"nonCompliants",
                key:"nonCompliants",
            },
            {
                title:"High Impact",
                dataIndex:"highImpact",
                key:"highImpact",
            },
            {
                title:"Medium Impact",
                dataIndex:"mediumImpact",
                key:"mediumImpact",
            },
            {
                title:"Low Impact",
                dataIndex:"lowImpact",
                key:"lowImpact",
            },
            {
                title:"P0",
                dataIndex:"p0",
                key:"p0",
            },
            {
                title:"P1",
                dataIndex:"p1",
                key:"p1",
            },
            {
                title:"P2",
                dataIndex:"p2",
                key:"p2",
            },
            {
                title:"P3",
                dataIndex:"p3",
                key:"p3",
            }
          ];
        setteamcol(columns);
    },[])
    function handleModal(){
        setshow(!show);
    }
    function addClass(i){
        var a = "button-"+i;
        var l = document.getElementById(a).classList.length;
        if(l == 1)
            document.getElementById(a).classList.add('yes');
        else
            document.getElementById(a).classList.remove('yes');
    }
    function addnewimg1(event){
        var b = JSON.parse(JSON.stringify(inputimg))
        b.push({imgsrc:URL.createObjectURL(event.target.files[0])});
        setinputimg(b)
    }
    function pageNext(){
        var tempArray=pageArray;
        if(tempArray[0].page+5<totalpage){
            tempArray[0].page=tempArray[0].page+5;
            tempArray[1].page=tempArray[1].page+5;
            tempArray[2].page=tempArray[2].page+5;
            tempArray[3].page=tempArray[3].page+5;
            tempArray[4].page=tempArray[4].page+5;
            // tempArray[5].page=tempArray[5].page+10;
            // tempArray[6].page=tempArray[6].page+10;
            // tempArray[7].page=tempArray[7].page+10;
            // tempArray[8].page=tempArray[8].page+10;
            // tempArray[9].page=tempArray[9].page+10;
            setpageArray(tempArray);
        }
    }
    function pagePrev(){
        var tempArray=pageArray;
        if(tempArray[0].page-5>0){
            tempArray[0].page=tempArray[0].page-5;
            tempArray[1].page=tempArray[1].page-5;
            tempArray[2].page=tempArray[2].page-5;
            tempArray[3].page=tempArray[3].page-5;
            tempArray[4].page=tempArray[4].page-5;
            // tempArray[5].page=tempArray[5].page-10;
            // tempArray[6].page=tempArray[6].page-10;
            // tempArray[7].page=tempArray[7].page-10;
            // tempArray[8].page=tempArray[8].page-10;
            // tempArray[9].page=tempArray[9].page-10;
            setpageArray(tempArray);
        }
    }
    function pageCapture(page){
        console.log(page)
    }
    const [clientchosen, setclientchosen] = useState([
  
        {
          projname:"Myntra - Shoes"
        },
        {
          projname:"Myntra - Loafers"
        }
  ]);
  const [projectslisttop, setprojectslisttop] = useState([
    {
      title:"Myntra",
      projects:[
        {
          projname:"Myntra - Shoes"
        },
        {
          projname:"Myntra - Loafers"
        }
      ]
    },
    {
      title:"Amazon",
      projects:[
        {
          projname:"Amazon - Fashion"
        },
        {
          projname:"Amazon - Jewellery"
        }
      ]
    }
  ])
  function showProjects(a){
    var proj = projectslisttop.filter(item => item.title == a);
    console.log(proj[0].projects)
    setclientchosen(proj[0].projects)
  }
    const ref = useRef()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    useEffect(() => {
        const checkIfClickedOutside = e => {
        if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
            setIsMenuOpen(false)
        }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
        document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isMenuOpen])
    const [sidenavToggle, setSidenavToggle] = useState(true);
    return (
        <>
            <section class="outer-wrapper seo-audit dashboard-seo">
            <div class="top-nav-bar">
                <div class="logo"><a href=""><img src="images/infidigit-logo.png" /></a> <span>Growth</span>
                <div className="wrapper dashboard-seo-dropdown" ref={ref}>
                    <button
                        className="button"
                        onClick={() => setIsMenuOpen(oldState => !oldState)}
                    >
                        All data View <i class="fa fa-caret-down" aria-hidden="true"></i>
                    </button>
                    {isMenuOpen && (
                    <div className="row">
                        <div className="col-md-6" style={{borderRight:'1px solid rgba(0,0,0,.15)'}}>
                            
                            <ul className="Clients-list">
                            <li  onClick={()=>{showProjects("Myntra")}}><span>Myntra</span> <i class="fa fa-angle-right"></i></li>
                            <li  onClick={()=>{showProjects("Amazon")}}><span>Amazon</span> <i class="fa fa-angle-right"></i></li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                        <ul class="projectsList">
                        {clientchosen.map((i)=>{
                            return(
                            <li onClick={()=>{setIsMenuOpen(false)}}><a style={{color:"inherit"}} href={`dashboard-seo?id=${i.projname}`}>{i.projname}</a></li>
                            )
                        })}
                        </ul>
                        </div>
                    </div>

                    )}
                    </div> 
                </div>
                <div class="nav-bar-center">&nbsp;</div>
                <div class="nav-bar-right">
                    <ul class="list-unstyled nav-right-menu">
                        <li><i class="fa fa-bell"></i></li>

                        <li class="dropdown">
                            <button onClick={()=>{console.log("hiii");setsidenav(!sidenav);}} class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1">
                                <span class="profile-pic"><img src="images/profile-pic.jpeg" alt=""/></span>
                                <span class="profile-name">SEO</span>
                            </button>



                                <ul style={{display:sidenav?"bloc{i.description}k":"none"}} class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a href="">Profile</a></li>

                                <li><a href="/">Log Out</a></li>
                                </ul>

                        </li>
                    </ul>
                </div>
                <div class="clearfix"></div>
            </div>

            <div className="custom-row-dashboard-seo">
                <div className={sidenavToggle?"custom-column-20-dashboard-seo":"custom-column-10-dashboard-seo"}>
                    <div class="sidebar-nav-bar">
                        {sidenavToggle 
                            ?
                            <>
                                <ul class="list-unstyled side-menu">
                                <li><a href="/dashboard-seo?id=Myntra - Shoes"><i class="fa fa-home"></i>Home</a></li>
                                <li><a href="module-expand-da"><span class="icon"><i class="fa fa-check"></i></span><span>DA/ PA Checker</span></a></li>
                                <li><a href="module-expand-google-trends"><span class="icon"><i class="fa fa-line-chart" aria-hidden="true"></i></span><span>Google Trends</span></a></li>
                                <li><a href="module-expand-page-speed"><span class="icon"><i class="fa fa-tachometer" aria-hidden="true"></i></span><span>Page Speed and Core Web Vitals</span></a></li>
                                <li><a href="module-expand-click-share"><span class="icon"><i class="fa fa-share"></i></span><span>Click Share</span></a></li>
                                <li><a href="module-expand-rank-tracking"><span class="icon"><i class="fa fa-trophy"></i></span><span>Rank Tracking</span></a></li>
                                <li><a href="module-expand-site-uptime"><span class="icon"><i class="fa fa-clock-o" aria-hidden="true"></i></span><span>Site Uptime Monitor</span></a></li>
                                <li><a href="module-expand-gsc"><span class="icon"><i class="fa fa-database" aria-hidden="true"></i></span><span>GSC Data Extractor</span></a></li>
                                <li><a href="module-expand-organic-research"><span class="icon"><i class='fa fa-flask' aria-hidden="true"></i></span><span>Organic Research module</span></a></li>
                                <li><a href="module-expand-roi"><span class="icon"><i class="fa fa-calculator" aria-hidden="true"></i></span><span>ROI Calculator</span></a></li>
                                <li><a href="content-word-count"><span class="icon"><i class="fa fa-file" aria-hidden="true"></i></span><span>Content Word Count on a Page</span></a></li>
                                <li><a href="module-expand-backlinks"><span class="icon"><i class="fa fa-external-link" aria-hidden="true"></i></span><span>BackLinks</span></a></li>
                                <li><a href="module-expand-keyword-research"><span class="icon"><i class="fa fa-keyboard-o" aria-hidden="true"></i></span><span>Keyword Research</span></a></li>
                                <li><a href="module-expand-seo-volatality"><span class="icon"><i class="fa fa-building-o"></i></span><span>SEO Volatality</span></a></li>
                                <li><a href="module-expand-google-analytics"><span class="icon"><i class="fa fa-bar-chart" aria-hidden="true"></i></span><span>Google Analytics</span></a></li>
                                <li><a href="module-expand-seo-audit"><span class="icon"><i class="fa fa-pagelines"></i></span><span>SEO Audit</span></a></li>
                                <br />
                                <li><a href="/ticketslist"><i class="fa fa-ticket"></i>Tickets</a></li>
                                <li><a href="/configuration-seo"><i className="fa fa-cogs"></i>Configuration</a></li>
                                </ul>
                                <button class="control-toggle-dashboard-seo" onClick={()=>setSidenavToggle(!sidenavToggle)}>
                                <i class="fa fa-angle-right"></i>
                                </button>
                            </>
                            :
                            <>
                                <ul class="list-unstyled side-menu">
                                <li><a href="/dashboard-seo?id=Myntra - Shoes"><i class="fa fa-home"></i></a></li>
                                <li><a href="module-expand-da"><i class="fa fa-check"></i></a></li>
                                <li><a href="module-expand-google-trends"><i class="fa fa-line-chart" aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-page-speed"><i class="fa fa-tachometer" aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-click-share"><i class="fa fa-share"></i></a></li>
                                <li><a href="module-expand-rank-tracking"><i class="fa fa-trophy"></i></a></li>
                                <li><a href="module-expand-site-uptime"><i class="fa fa-clock-o" aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-gsc"><i class="fa fa-database" aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-organic-research"><i class='fa fa-flask' aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-roi"><i class="fa fa-calculator" aria-hidden="true"></i></a></li>
                                <li><a href="content-word-count"><i class="fa fa-file" aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-backlinks"><i class="fa fa-external-link" aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-keyword-research"><i class="fa fa-keyboard-o" aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-seo-volatality"><i class="fa fa-building-o"></i></a></li>
                                <li><a href="module-expand-google-analytics"><i class="fa fa-bar-chart" aria-hidden="true"></i></a></li>
                                <li><a href="module-expand-seo-audit"><i class="fa fa-pagelines"></i></a></li>
                                <br />
                                <li><a href="/ticketslist"><i class="fa fa-ticket"></i></a></li>
                                <li><a href="/configuration-seo"><i className="fa fa-cogs"></i></a></li>
                                </ul>
                                <button class="control-toggle-dashboard-seo" onClick={()=>setSidenavToggle(!sidenavToggle)}>
                                <i class="fa fa-angle-right"></i>
                                </button>
                            </>
                        }        
                    </div>
                </div>
                <div className={sidenavToggle?"custom-column-80-dashboard-seo main-dashboard":"custom-column-90-dashboard-seo main-dashboard"}>
                    
                   
                    <div className="row">
                        <div className="ms-5 mb-5">
                        
                            {/* <Pagination count={100} variant="outlined" shape="rounded" page={page} onChange={handleChange}/> */}
                            <div class="pagination p12">
                            <a onClick={pagePrev} class="prev" href="#"><li>&lt;</li></a>
                                <ul>
                                    {
                                        pageArray.map(item=>{
                                            return(
                                                <a class={`button-${item.page}`} onClick={()=>{pageCapture(item.page)}} href="#"><li>{item.page}</li></a>
                                            )
                                        })
                                    }
                                    {/* <a class="is-active" href="#"><li>10</li></a> */}
                                    
                                    <a onClick={pageNext} class="next" href="#"><li >&gt;</li></a>
                                </ul>
                            </div>

                        </div>
                    </div>
                    {/* <div className="row my-2">
                        <div className="col-md-2 x-5 my-2 ">
                            <label className="ms-md-5" style={{marginRight:"0px"}} htmlFor="">Audit Module</label>
                        </div>
                        <div className="col-md-2">
                            <span><input className="text-center" value="Lorem ipsum" type="text" /></span>
                        </div>
                    </div>
                    <div className="row my-2">
                        <div className="col-md-2 x-5 my-2 ">
                            <label className="ms-md-5" style={{marginRight:"0px"}} htmlFor="">Audit Point Title</label>
                        </div>
                        <div className="col-md-2">
                            <span><input className="text-center" value="Lorem ipsum" type="text" /></span>
                        </div>
                    </div> */}
                    <div class="common-wrapper">

                        <div class="common-wcard">

                            <div class="common-form-fields">

                                <div class="add-user">
                                    <div class="form-wrappers">
                                        <label>Audit Module</label>
                                        <br/>
                                        <input type="text" name="" placeholder="Audit Module 1 " disabled />
                                    </div>

                                    <div class="form-wrappers">
                                        <label>Audit Point Title</label>
                                        <br/>
                                        <input type="text" name="" placeholder="Title" disabled />
                                    </div>

                                    <div class="form-wrappers">
                                        <label>Description</label>
                                    </div>
                                
                                    {notes1 && notes1.map((i, index)=>{
                                        return(
                                            <div>
                                                <div className="description-box-outer">
                                                    <textarea name="" id={i.id}  value={i.description} disabled></textarea>
                                                </div>
                                                <div className="row common-mb-24">
                                                    <div className="col-1 ms-auto text-center">
                                                        <button id={`button-${i.id}`} class="astext" onClick={()=>{addClass(i.id)}}>Yes</button>
                                                    </div>
                                                    <div className="col-1 text-center">
                                                        <button class="astext" onClick={()=>handleModal()}>No</button>
                                                    </div>
                                                    <div className="col-3 text-center">
                                                        <button  class="astext ">Not applicable</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="add-new-btnw common-mb-24">
                    <span class="export" style={{marginRight:0+'px'}}>
                                        
                                        <button class="outline-btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Export
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-content" href="#">Excel</a>
                                            <a class="dropdown-content" href="#">CSV</a>
                                            <a class="dropdown-content" href="#">Sheets</a>
                                        </div>
                                
                            </span>
                    </div>
                    <Table id="sample" columns={teamcol} dataSource={teamlist} rowSelection={{type: selectionType,...rowSelection,}} pagination={{position:["topLeft", "bottomRight"]}} />
                </div>
            </div>
        </section>
        <Modal
        show={show}
        onHide={() => handleModal(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        className="seo-audit-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div class="common-wrapper">

                <div class="common-wcard">

                    <div class="common-form-fields">

                        <div class="add-user">
                            <div class="form-wrappers">
                                <label>Impact</label>
                                <br/>
                                <select name="" id="">
                                    <option value="">High</option>
                                    <option value="">Medium</option>
                                    <option value="">Low</option>
                                </select>
                            </div>

                            <div class="form-wrappers">
                                <label>Priority</label>
                                <br/>
                                <select name="" id="">
                                    <option value="">High</option>
                                    <option value="">Medium</option>
                                    <option value="">Low</option>
                                </select>
                            </div>

                            <div class="form-wrappers">
                                <label>Suggestion</label>
                                <br/>
                                <textarea cols="48" rows="10"></textarea>
                            </div>

                            <div class="form-wrappers">
                                <label>Reference Image</label>
                                <br/>
                                <div class="images-description">
                                    {inputimg.map((j)=>{
                                        return(
                                            <img src={j.imgsrc}/>
                                        )
                                    })}
                                    <button class="file-btn" onClick={()=>{document.getElementById('fileMy1').click()}}><i class="fa fa-plus"></i></button>
                                    <input type='file' id="fileMy1" class="none" onChange={(e)=>addnewimg1(e)}></input>
                                </div>
                            </div>
                            
                            <div class="form-wrappers">
                                <label>Status</label>
                                <br/>
                                <select name="" id="">
                                    <option value="">Active</option>
                                    <option value="">Completed</option>
                                    <option value="">Prospect</option>
                                </select>
                            </div>
                            
                            <div class="form-wrappers">
                                <label>Status Update Date</label>
                                <br/>
                                <input type="date" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>  
        <Button onClick={()=>handleModal()}>Close</Button>  
        <Button onClick={()=>handleModal()}>Save</Button>  
        </Modal.Footer> 
      </Modal>
        </>
    );
}

export default ModuleExpandSEOAudit;