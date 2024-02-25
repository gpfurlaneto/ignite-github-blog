import { z } from "zod";
import { Container, FormItem, LabelContainer } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Spinner } from "../Spinner";


const searchSchema = z.object({
  searchTerm: z.string().min(1, 'Conteúdo de busca requerido.'),
})

type SearchFormType = z.infer<typeof searchSchema>

type SearchFormProps = {
  handleSearch: (searchTerm: string) => Promise<void>
}

export function SearchForm({ handleSearch }: SearchFormProps) {

  const {
    register,
    handleSubmit: onSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SearchFormType>({
    resolver: zodResolver(searchSchema),
  })

  const handleSubmit = async ({ searchTerm }: SearchFormType) => {
    await handleSearch(searchTerm)
  }

  return (
    <Container>
      <LabelContainer>
        <label>Publicações</label>
        <span>6 publicações</span>
      </LabelContainer>
      <form onSubmit={onSubmit(handleSubmit)}>
        <FormItem>
          <input placeholder="Buscas Conteúdo" {...register('searchTerm')} disabled={isSubmitting} />
          <span>{errors.searchTerm?.message}</span>
          {isSubmitting && <Spinner />}
        </FormItem>
      </form>
    </Container>
  )
}