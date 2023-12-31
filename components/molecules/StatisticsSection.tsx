import styled from 'styled-components'
import Milestone from './Milestone'
import { useEffect, useRef, useState } from 'react'

const StatisticsWrapper = styled.div`
    width: 90%;
`

const MainContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 16px;
`

const ExpandedStatisticsSection = styled.div`
    display: flex;
    border-radius: 8px;
    padding: 16px 0;
    margin: 6px 0;
    background-color: #ffffff;
    box-shadow: 0 7px 30px -10px rgba(150,170,180,0.5);
    overflow-x: auto; /* Enable horizontal scrolling */
    white-space: nowrap;
`

const seenClubs = [
    ['FC Bayern Munich', '3'],
    ['Sevilla FC', '3'],
    ['FC Bayern Munich Feminino', '3'],
    ['Manchester City', '2'],
    ['1. FC Köln', '1'],
    ['1. FC Nürnberg', '1'],
    ['1. FC Union Berlin', '1'],
    ['AC Milan', '1'],
    ['AS Roma', '1'],
    ['Arsenal FC', '1'],
    ['Arsenal Women FC', '1'],
    ['Brazil (Women)', '1'],
    ['Brighton & Hove Albion', '1'],
    ['Chelsea FC', '1']
]

const stadiumsList = [
    ['Allianz Arena', 5],
    ['Stamford Bridge', 10],
    ['Wembley', 1],
    ['Old Trafford', 1],
    ['London Stadium', 1],
    ['Etihad Stadium', 1],
    ['Sportpark Unterhaching', 1],
    ['Max-Morlock-Stadion', 1],
    ['Camp Nou', 1],
    ['Parc des Princes', 1],
    ['Atatürk Stadium', 1],
    ['Puskás Arena', 1],
    ['San Siro', 1],
    ['Estadio do Arruda', 5],
    ['Ilha do Retiro', 1]
]

const StadiumName = styled.div<{ $times: number }>`
    position: relative;
    font-size: 14px;
    background-color: #f4f4f4; /* Light gray background */
    padding: 8px;
    margin: 0 8px; /* Adjust spacing between cards */
    border-radius: 8px;
    white-space: nowrap; /* Prevent text from breaking into a new line */
    display: inline-block; /* Ensure inline display */

    &:after {
        content: '${props => `${props.$times}x`}';
        position: absolute;
        bottom: -8px;
        font-size: 10px;
        color: #ffffff;
        background-color: #008bf8;
        border-radius: 50%;
        padding: 4px;
    }
`

const ClickableDiv = styled.div``

const StadiumListSection = ({ stadiumsList }) => {
    return (
        <>
            {stadiumsList.map(([stadium, timesSeen]) => (
                <StadiumName key={stadium} $times={timesSeen}>{stadium}</StadiumName>
            ))}
        </>
    )
}

const countriesList = '🇧🇷🇧🇪🏴󠁧󠁢󠁥󠁮󠁧󠁿🇭🇷🇫🇷🇩🇪🇮🇹🇲🇦🇷🇺🇪🇸🇹🇷🇶🇦'

const SeenClub = styled.div<{ $times: number }>`
    position: relative;
    font-size: 14px;
    background-color: #f4f4f4; /* Light gray background */
    padding: 8px;
    margin: 0 8px; /* Adjust spacing between cards */
    border-radius: 8px;
    white-space: nowrap; /* Prevent text from breaking into a new line */
    display: inline-block; /* Ensure inline display */

    &:after {
        content: '${props => `${props.$times}x`}';
        position: absolute;
        bottom: -8px;
        font-size: 10px;
        color: #ffffff;
        background-color: #008bf8;
        border-radius: 50%;
        padding: 4px;
    }
`

const SeenClubsSection = ({ seenClubs }) => {
    return (
        <>
            {seenClubs.map(([club, timesSeen]) => (
                <SeenClub key={club} $times={timesSeen}>{club}</SeenClub>
            ))}
        </>
    )
}

const CountriesWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

const CountriesContent = styled.div`
    text-align: center;
`

const CountriesSection = () => {
    return (
        <CountriesWrapper>
            <CountriesContent>
                {countriesList}
            </CountriesContent>
        </CountriesWrapper>
    )
}

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, callback) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          console.log("You clicked outside of me!");
          callback();
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

const StatisticsSection = () => {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, () => setFocusedStat(undefined));
    const [focusedStat, setFocusedStat] = useState<string | undefined>();

    const handleClick = (clickedStat: string) => {
        setFocusedStat(clickedStat)
    }
 
    const displayFocusedStat = () => ({
        matches: <SeenClubsSection seenClubs={seenClubs} />,
        stadiums: <StadiumListSection stadiumsList={stadiumsList} />,
        countries: <CountriesSection />
    }[focusedStat])

    return (
        <StatisticsWrapper>
            <MainContent>
                <ClickableDiv ref={wrapperRef} onClick={() => handleClick('matches')}>
                    <Milestone iconLabel='football' text='27'  />
                </ClickableDiv>
                <ClickableDiv ref={wrapperRef} onClick={() => handleClick('stadiums')}>
                    <Milestone iconLabel='stadium' text='15'  />
                </ClickableDiv>
                <ClickableDiv ref={wrapperRef} onClick={() => handleClick('countries')}>
                    <Milestone iconLabel='country' text='12'  />
                </ClickableDiv>
            </MainContent>
            {focusedStat && <ExpandedStatisticsSection>
                {displayFocusedStat()}
            </ExpandedStatisticsSection>}
        </StatisticsWrapper>
    )
}

export default StatisticsSection
