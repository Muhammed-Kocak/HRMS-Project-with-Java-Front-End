import React from 'react'
import { Container, Grid, GridColumn, GridRow } from 'semantic-ui-react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import Navi from './Navi'


export default function Dashboard() {
    return (
        <div>
            <Grid>
                <GridRow>
                    <GridColumn width={4} >
                        <Categories />
                    </GridColumn>
                    <GridColumn  width={12}>
                        <ProductList />
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}
