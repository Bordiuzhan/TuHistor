import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Token {
  token: string;
}

interface Role {
  role: string;
}

interface Account {
  _id: string;
  // Other account properties
}

interface Factura {
  // Factura properties
}

interface AppState {
  token: string;
  role: string;
  accounts: Account[];
  count: number;
  facturas: Factura[];
  facturasCount: number;
}

const initialState: AppState = {
  token: '',
  role: '',
  accounts: [],
  count: 0,
  facturas: [],
  facturasCount: 0,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<Token & Role>) {
      state.token = action.payload.token;
      state.role = action.payload.role;
    },
    signOut(state) {
      state.token = '';
      state.role = '';
      state.accounts = [];
      state.count = 0;
      state.facturas = [];
      state.facturasCount = 0;
    },
    getAccounts(state, action: PayloadAction<Account[]>) {
      state.accounts = action.payload;
    },
    getAccountsCount(state, action: PayloadAction<number>) {
      state.count = action.payload;
    },
    getFacturas(state, action: PayloadAction<Factura[]>) {
      state.facturas = action.payload;
    },
    getFacturasCount(state, action: PayloadAction<number>) {
      state.facturasCount = action.payload;
    },
    deleteAccount(state, action: PayloadAction<string>) {
      state.accounts = state.accounts.filter(
        (item) => item._id !== action.payload
      );
      state.count -= 1;
    },
  },
});

export const {
  signIn,
  signOut,
  getAccounts,
  getAccountsCount,
  getFacturas,
  getFacturasCount,
  deleteAccount,
} = appSlice.actions;

export default appSlice.reducer;
