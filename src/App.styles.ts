import styled from "styled-components";

export const Container = styled.div`
    background: #D9CDF7;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
    div{
        position: relative;
        
        img{
            &:nth-child(1){
            position: absolute;
            cursor: pointer;
            top: 10px;
            right: 52px;
            }
        }

        img{
            &:nth-child(2){
                max-width: 449px;
                height: 253px;
            }
        }
    }
`
export const DivText = styled.div`
    display: flex;
    flex-direction: column;
    small{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 300;
        font-size: 10px;
        line-height: 100%;
        margin-bottom: 12px;
    }

    h1{
        font-family: 'Crimson Pro';
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 100%;
        margin-bottom: 12px;
    }

    span{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        color: #271a45;
    }
`

export const Button = styled.button`
    padding: 8px 16px;
    border: 1px solid #271a45;
    border-radius: 999px;
    width: 60%;
    margin-top: 20px;
    cursor: pointer;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
`