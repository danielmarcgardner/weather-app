import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

//Boilerplate for jest, enzyme, and react
configure({ adapter: new Adapter() });
