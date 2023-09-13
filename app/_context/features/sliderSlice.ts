import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CarouselState = {
    currentIndex: number;
    items: string[];
}

const initialState: CarouselState = {
    currentIndex: 0,
    items: [],
};

const carouselSlice = createSlice({
    name: 'carousel',
    initialState,
    reducers: {
        setItems: (state, PayloadAction) => {
            return {
                ...state,
                items: PayloadAction.payload
            }
        },
        nextSlide: (state) => {
            console.log(state.currentIndex + " " + (state.items.length - 1));
            if (state.currentIndex < state.items.length - 1) {
                console.log('Next slide action dispatched');
                return {
                    ...state,
                    currentIndex: state.currentIndex + 1
                }
            }
        },
        prevSlide: (state) => {
            if (state.currentIndex > 0) {
                console.log('Prev slide action dispatched');
                return {
                    ...state,
                    currentIndex: state.currentIndex - 1
                }
            }
        },
        goToSlide: (state, action) => {
            return {
                ...state,
                currentIndex: action.payload
            }
        },
    },
});

export const { nextSlide, prevSlide, goToSlide, setItems } = carouselSlice.actions;
export default carouselSlice.reducer;