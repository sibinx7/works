import {toggleSidebar} from '../index';

describe('Test Action', ()=> {
	it('should perform Toggle sidebar action', () => {
		const status = true;
		const expectedAction = {
			type: 'TOGGLE_SIDEBAR',
			status 
		}

		expect(toggleSidebar(status)).toEqual(expectedAction)
	})
})