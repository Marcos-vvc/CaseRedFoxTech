import { BaseDatabase } from "./BaseDatabase";

export class PokeDatabase extends BaseDatabase {

  private static TABLE_NAME = "pokemon";

  public ContainListings = async (): Promise<any> => {
    try {
      const result = await this.getConnection()
        .select("*")
        .from(PokeDatabase.TABLE_NAME)

      return result

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public Search = async (Name: string): Promise<any> => {
    try {

      const result = await this.getConnection()
        .select("*")
        .where({ Name })
        .from(PokeDatabase.TABLE_NAME)

      return result

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public Page = async (size: number, offset: number): Promise<any> => {
    try {

      const result = await this.getConnection()
        .select()
        .limit(size)
        .offset(offset)
        .from(PokeDatabase.TABLE_NAME)

      return result

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public FilterByOrder = async (order: string, filter: string) => {
    try {

      const result = await this.getConnection()
        .select()
        .orderBy(filter, order)
        .from(PokeDatabase.TABLE_NAME)

      return result
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

}
