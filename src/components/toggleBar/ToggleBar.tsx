import { Button } from '../button/button.styled';
import { BarContainer, ToggleButtonGroup } from './toggleBar.styled';

const ToggleBar = () => {
  return (
    <BarContainer>
      <ToggleButtonGroup>
        <li>
          <button className='body-two active'>pomodoro</button>
        </li>
        <li>
          <button className='body-two'>Short Break</button>
        </li>
        <li>
          <button className='body-two'>Long Break</button>
        </li>
        <Button className='chosen-option' />
      </ToggleButtonGroup>
    </BarContainer>
  );
};

export default ToggleBar;
