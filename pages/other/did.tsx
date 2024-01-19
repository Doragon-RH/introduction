import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import Box from "@mui/material/Box";
import { blue } from '@mui/material/colors';
import {
    TransitionContext,
    useTransitionStateManager,
    useTransitionTrigger,
  } from '@mui/base/useTransition';
import { styled } from '@mui/system';
import * as React from 'react';

export default function Did() {
    return (
        <Layout home ={0}>
            <Head>
                What I did
            </Head>
            
            <Box
            sx={{
                padding: "1rem",
                fontSize: "2rem",
            }}>
                What I did
            </Box>
            <Trivia label="2022/04 ～ 2023/02">
                <SlideDown>
                I learned algorizumn in piza and I learned html, css!
                </SlideDown>
            </Trivia>
            <Trivia label="2023/04 ～ 2023/08">
                <SlideDown>
                I participated in the hackathon and I learned Python, git, docker, MySQL!<br /><br />
                サポーターズ主催のハッカソン出場！
                </SlideDown>
            </Trivia>
            <Trivia label="2023/07 ～ 2023/11">
                <SlideDown>
                基本情報技術者試験合格！
                </SlideDown>
            </Trivia>
            <Trivia label="2023/10 ～ 2023/12">
                <SlideDown>
                Go言語学習
                </SlideDown>
            </Trivia>
            <Trivia label="2023/12 ～ now">
                <SlideDown>
                AtCoderコンテスト参加
                </SlideDown>
            </Trivia>
        </Layout>
    );
}

interface TriviaProps {
    label: string;
    children: React.ReactNode;
  }
  
const ToggleButton = styled('button')(
({ theme }) => `
font-family: 'IBM Plex Sans', sans-serif;
font-weight: 600;
font-size: 0.875rem;
line-height: 1.5;
background-color: ${blue[500]};
padding: 8px 16px;
border-radius: 8px ;
color: white;
transition: all 150ms ease;
cursor: pointer;
border: 1px solid ${blue[500]};
box-shadow: 0 2px 1px ${
    theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(45, 45, 60, 0.2)'
}, inset 0 1.5px 1px ${blue[400]}, inset 0 -2px 1px ${blue[600]};
display: block;
width: 100%;

&:hover {
    background-color: ${blue[600]};
}

&:active {
    background-color: ${blue[700]};
    box-shadow: none;
    transform: scale(0.99);
}

&:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
    outline: none;
}
`,
);

const Content = styled('div')`
font-family: 'IBM Plex Sans', sans-serif;
font-weight: 600;
font-size: 0.875rem;
line-height: 1.5;
padding: 8px 16px;
`;

const Root = styled('div')`
max-width: 400px;
`;

function Trivia(props: TriviaProps) {
const { label, children } = props;
const [open, setOpen] = React.useState(false);
const { contextValue } = useTransitionTrigger(open);
const containerId = React.useId();

return (
    <Root>
    <ToggleButton
        type="button"
        aria-controls={containerId}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
    >
        {label}
    </ToggleButton>
    <TransitionContext.Provider value={contextValue}>
        <Content id={containerId} aria-hidden={!open}>
        {children}
        </Content>
    </TransitionContext.Provider>
    </Root>
);
}

const SlideDownOuterWrapper = styled('div')`
display: grid;
transition: grid-template-rows 200ms ease-in-out;
grid-template-rows: 0fr;

&.expanded {
    grid-template-rows: 1fr;
}
`;

const SlideDownInnerWrapper = styled('div')`
overflow: hidden;
`;

function SlideDown(props: React.PropsWithChildren<{}>) {
const { children } = props;
const { requestedEnter, onEntering, onEntered, onExiting, onExited } =
    useTransitionStateManager();

React.useEffect(() => {
    if (requestedEnter) {
    onEntering();
    } else {
    onExiting();
    }
}, [requestedEnter, onEntering, onExiting]);

return (
    <SlideDownOuterWrapper
    className={requestedEnter ? 'expanded' : ''}
    onTransitionEnd={(event) => {
        if (event.propertyName === 'grid-template-rows') {
        if (requestedEnter) {
            onEntered();
        } else {
            onExited();
        }
        }
    }}
    >
    <SlideDownInnerWrapper>{children}</SlideDownInnerWrapper>
    </SlideDownOuterWrapper>
);
}
