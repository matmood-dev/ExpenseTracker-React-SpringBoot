package com.example.expense.tracker.service;

import com.example.expense.tracker.model.Expense;
import com.example.expense.tracker.repository.ExpenseRepository;
import org.springframework.stereotype.Service;

import java.time.YearMonth;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class ExpenseService {

    private final ExpenseRepository repo;

    public ExpenseService(ExpenseRepository repo) {
        this.repo = repo;
    }

    public List<Expense> getAll() {
        return repo.findAll();
    }

    public Expense create(Expense expense) {
        return repo.save(expense);
    }

    public Expense update(Long id, Expense updated) {
        return repo.findById(id).map(e -> {
            e.setTitle(updated.getTitle());
            e.setAmount(updated.getAmount());
            e.setDate(updated.getDate());
            e.setCategory(updated.getCategory());
            e.setDescription(updated.getDescription());
            return repo.save(e);
        }).orElseThrow();
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }

    public Map<YearMonth, Double> getMonthlySummary() {
        return repo.findAll().stream()
                .collect(Collectors.groupingBy(
                    e -> YearMonth.from(e.getDate()),
                    TreeMap::new,
                    Collectors.summingDouble(e -> e.getAmount().doubleValue())
                ));
    }
}
